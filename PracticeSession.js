import Question from './Question.js'
import MultipleChoiceQuestion from './MultipleChoiceQuestion.js'
import CodingQuestion from './CodingQuestion.js'
import User from './User.js'


class PracticeSession{
  constructor(user){
    this.user=user
    this.questions=[]
  }

  addQuestion(question){
    this.questions.push(question)
  }

  start(){
    this.questions.forEach(question=>{
      question.display()
      // let answer=prompt("Enter your answer:")
      let answer='O(log n)'
      if(question.checkAnswer(answer)){
        console.log("Correct")
        this.user.addSolvedQuestion(question)
      }else
        console.log("Incorrect. Try again!")
    })
  }
}