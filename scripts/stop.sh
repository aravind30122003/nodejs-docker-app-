#!/bin/bash
set -e

echo "===== [ApplicationStop] BEGIN =====" >> /tmp/deploy.log
cd /home/ubuntu/nodejs-docker-app || exit
docker-compose down >> /tmp/deploy.log 2>&1
echo "===== [ApplicationStop] END =====" >> /tmp/deploy.log
