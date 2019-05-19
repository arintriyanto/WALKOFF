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
