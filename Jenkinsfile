pipeline{
  agent{
    node{
      label 'docker-image-alpine'
    }
  }
  triggers{
    pollSCM '* * * * *'
  }
  stages{
    stage('BUILD'){
      steps{
        echo "Building"
        sh '''
        echo "testing the build"
        '''
      }
    }
  }
}