#!/bin/bash

# Clear previous images
# docker rmi --force $(docker images | grep twasi/resolve | tr -s ' ' | cut -d ' ' -f 3)

docker build -t twasi/resolve .
