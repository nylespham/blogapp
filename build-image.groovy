docker build -t ${SERVICE_NAME}:${TAG} -f Dockerfile.arg --build-arg SERVICE=${SERVICE_NAME}

kubectl rollout restart deployment 'deplyment_name'