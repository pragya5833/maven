#! /bin/bash
#copy new jar to build folder
cp -f /home/shav/questionmaker/jenkins/pipeline/simple-java-maven-app/target/*.jar  /home/shav/questionmaker/jenkins/pipeline/jenkins/build
cd /home/shav/questionmaker/jenkins/pipeline/jenkins/build
sudo docker-compose build