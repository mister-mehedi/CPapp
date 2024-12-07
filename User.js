// User class with Encapsulation
class User{
  constructor(username,email){
    this.username=username
    this.email=email
    this.solvedQuestions=[]
    this.progress={}
  }

  addSolvedQuestion(questionId){
    this.solvedQuestions.push(questionId)
  }

  updateProgress(topic,status){
    this.progress[topic]=status;
  }
}

export default User;