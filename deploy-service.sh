#!/bin/bash

export APP_DIR="infra/k8s"

kubectl apply -f ${APP_DIR}/client-deployment.yaml

kubectl apply -f ${APP_DIR}/comments-deployment.yaml

kubectl apply -f ${APP_DIR}/event-bus-deployment.yaml

kubectl apply -f ${APP_DIR}/moderation-deployment.yaml

kubectl apply -f ${APP_DIR}/posts-deployment.yaml

kubectl apply -f ${APP_DIR}/query-deployment.yaml