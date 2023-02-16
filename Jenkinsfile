pipeline{
    environment {
    registry = "sharkynd/simplenodeapp"
    registryCredential = 'dockerhub'
    dockerImage = ''
    }
  agent{
    node{
      label 'docker-image-alpine'
    }
  }
  triggers{
    pollSCM '* * * * *'
  }
  stages{
    // stage('BUILD DOCKER'){
    //   steps {
    //     git 'git@github.com:SharkyND/jenkins-node-app.git'
    //   }
    // }
    stage('Building Docker Image') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
              }
      }
    }
  }
}