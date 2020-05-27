#! /bin/bash
echo "**********************"
echo "pushing image"
echo "**********************"
IMAGE="mavenproject"
PASS=me@5833
sudo docker login -u pragya5833 -p $PASS
sudo docker tag $IMAGE:$BUILD_TAG pragya5833/$IMAGE:$BUILD_TAG
sudo docker push pragya5833/$IMAGE:$BUILD_TAG