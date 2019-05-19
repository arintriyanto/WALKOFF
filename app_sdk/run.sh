#!/bin/sh

docker rmi localhost:5000/walkoff_app_sdk
docker build . -t localhost:5000/walkoff_app_sdk 
