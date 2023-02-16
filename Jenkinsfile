pipeline{
  agent{
    node{
      label 'jenkins-agent-alpine'
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