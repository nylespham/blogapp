#!/bin/bash

kubectl apply -f client-deployment.yaml

kubectl apply -f comments-deployment.yaml

kubectl apply -f event-bus-deployment.yaml

kubectl apply -f moderation-deployment.yaml

kubectl apply -f posts-deployment.yaml

kubectl apply -f query-deployment.yaml