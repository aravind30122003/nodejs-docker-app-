#!/bin/bash

cd /home/ec2-user/nodejs-docker-app

# Stop and remove previous containers
docker-compose down

# Build and start new containers
docker-compose up -d

