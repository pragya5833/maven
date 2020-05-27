FROM jenkins/jenkins:lts
USER root
#install ansible
RUN curl -O https://bootstrap.pypa.io/get-pip.py &&  \
    python get-pip.py && \
    pip install ansible --upgrade
#install docker
RUN apt-get update
RUN apt-get -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
RUN apt-cache policy docker-ce
RUN apt-get update
RUN apt-get  -y install docker-ce=5:18.09.0~3-0~debian-stretch docker-ce-cli=5:19.03.8~3-0~debian-stretch containerd.io
#RUN apt-get install docker-ce=5:19.03.8~3-0~ubuntu-bionic docker-ce-cli=5:19.03.8~3-0~ubuntu-bionic containerd.io
#RUN bash service docker start
RUN usermod -aG docker jenkins
#compose
RUN curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && chmod +x /usr/local/bin/docker-compose
USER jenkins
