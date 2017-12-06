import json
import logging
import os

from flask import render_template, send_from_directory

import core.config.config
import core.config.paths
from core import helpers
from server import app
from server.context import running_context
from . import database

logger = logging.getLogger(__name__)

# database.initialize_resource_roles_from_cleared_database()


# Custom static data
@app.route('/client/<path:filename>')
def client_app_folder(filename):
    return send_from_directory(os.path.abspath(core.config.paths.client_path), filename)


@app.route('/')
@app.route('/playbook')
@app.route('/scheduler')
@app.route('/devices')
@app.route('/cases')
@app.route('/settings')
def default():
    return render_template("index.html")


@app.route('/interfaces/<interface_name>')
def app_page(interface_name):
    return render_template("index.html")


@app.route('/login')
def login_page():
    return render_template("login.html")


def write_playbook_to_file(playbook_name):
    """Writes a playbook to file.

    Args:
        playbook_name (str): The name of the playbook to write to a file.
    """
    playbook_filename = os.path.join(core.config.paths.workflows_path, '{0}.playbook'.format(playbook_name))
    backup = None
    try:
        with open(playbook_filename) as original_file:
            backup = original_file.read()
        os.remove(playbook_filename)
    except (IOError, OSError) as e:
        logger.warning('Cannot read original playbook! Saving without backup! '
                       'Reason: {}'.format(helpers.format_exception_message(e)))

    app.logger.debug('Writing playbook {0} to file'.format(playbook_name))

    try:
        with open(playbook_filename, 'w') as workflow_out:
            playbook_json = running_context.controller.get_playbook_representation(playbook_name)
            workflow_out.write(json.dumps(playbook_json, sort_keys=True, indent=4, separators=(',', ': ')))
    except Exception as e:
        logger.error('Could not save playbook to file. Reverting file to original. '
                     'Error: {0}'.format(helpers.format_exception_message(e)))
        if backup is not None:
            with open(playbook_filename, 'w') as f:
                f.write(backup)
