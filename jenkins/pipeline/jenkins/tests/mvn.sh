#! /bin/bash
echo "*********************************"
echo "Testing jar"
echo "*********************************"
sudo docker run --rm -v /home/shav/questionmaker/jenkins/pipeline/simple-java-maven-app:/app -v /root/.m2 -w /app maven:3-alpine "$@"