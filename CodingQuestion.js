import Question from './Question.js'


// Inheritance
class CodingQuestion extends Question{
  constructor(id,prompt,solution){
    super(id,prompt)
    this.solution=solution
  }

  display(){
    console.log(this.prompt)
  }

  checkAnswer(answer){
    return this.solution===answer
  }
}

export default CodingQuestion;