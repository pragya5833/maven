pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                sh '''
                    ./home/shav/questionmaker/jenkins/pipeline/jenkins/build/mvn.sh mvn -B -DskipTests clean package
                    ./home/shav/questionmaker/jenkins/pipeline/jenkins/build/build.sh
                '''
            }
        }
        stage('Test'){
            steps{
                sh './home/shav/questionmaker/jenkins/pipeline/jenkins/tests/mvn.sh mvn test'
            }

        }
        stage('Push'){
            steps{
                sh './home/shav/questionmaker/jenkins/pipeline/jenkins/push/push.sh'
            }

        }
        stage('Deploy'){
            steps{
                sh 'echo "deploying"'
            }
        }
    }
}