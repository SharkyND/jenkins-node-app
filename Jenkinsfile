pipeline{
    environment {
    DOCKERHUB_REGISTRY = "sharkynd/simplenodeapp"
    DOCKERHUB_CREDENTIALS = credentials('sharky-dockerhub')
    dockerImage = ''
    }
  agent{
    docker{image 'node: 16-alpine'}
  }
  // agent any

  triggers{
    pollSCM '*/2 * * * *'
  }
  stages{
    stage('BUILD DOCKER'){
      steps {
        git 'git@github.com:SharkyND/jenkins-node-app.git'
      }
    }
    stage('Building Docker Image') {
      steps {
        sh "docker build -t $DOCKERHUB_REGISTRY:$BUILD_NUMBER ."
      }
    }
  }
}