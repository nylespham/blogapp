#!/bin/bash

git pull

docker build -t client:latest -f dockerfiles/Dockerfile . --build-arg SERVICE=client --build-arg PORT=3000

docker build -t posts:latest -f dockerfiles/Dockerfile.arg . --build-arg SERVICE=posts --build-arg PORT=4000 

docker build -t comments:latest -f dockerfiles/Dockerfile.arg . --build-arg SERVICE=comments --build-arg PORT=4100 

docker build -t query:latest -f dockerfiles/Dockerfile.arg . --build-arg SERVICE=query --build-arg PORT=4200 

docker build -t moderation:latest -f dockerfiles/Dockerfile.arg . --build-arg SERVICE=moderation --build-arg PORT=4400 

docker build -t event-bus:latest -f dockerfiles/Dockerfile.arg . --build-arg SERVICE=event-bus --build-arg PORT=4500 
