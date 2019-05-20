# EDITS - @frikkylikeme
These edits are here just for the purpose of making it easy to try this out. 

* Added thehive stack to docker-compose file with a db so everything is set up
* Added webhook to the docker-compose based on the folder webhook/
* Added the app TheHive to apps with configurations already finished

Original repo: https://github.com/frikky/nsacyber/walkoff.git

## Requirements

* Docker 18.06.0+: https://docs.docker.com/install/
* Docker Compose 3+ (on Linux): https://docs.docker.com/compose/install/
    * Docker Desktop for Mac and Windows are already bundled with Docker Compose.

## Installation

Ensure that you have Docker and Docker Compose installed.

```
# Clone this repo & branch:
git clone -b thehive-integration https://github.com/frikky/walkoff.git

# Navigate to where the docker-compose.yml is:
cd walkoff

# Walkoff 1.0 makes use of Docker Swarm - initialize one now:
docker swarm init

# Build and launch the docker-compose (this will take a while):
docker-compose up -d --build

# WALKOFF UI is viewable at http://localhost:8080 - login = admin/admin
# TheHive UI is viewable at http://localhost:9000 - login = admin/admin
```

## TheHive integration testing
```
# Wait 4-5 minutes for the docker-compose to be up (builds 8 services) - numpy & crypto libraries are slow :)
# Wait 2-3 minutes for app_sdk to build AFTER initial launch (used to build every app)

# Enter the webhook repo
# Run the alert creation test script
python3 webhook/test-alert-create.py

# This should have done the following:
# 1. Created an alert in TheHive (localhost:9090)
# 2. This triggered a webhook to the container walkoff_webhook_1
# 3. The webhook changes and runs the workflow in AlertCreation 
# 4. As the title contains "portscan", it should be changed based on the workflow

```

### Current issues
* Not possible to run a lot of cuncurrent workflows. Seems to hang on container creation for some reason. It's still in alpha :)
