import Question from './Question.js'


// Interface for multipleChoice questions
class MultipleChoiceQuestion extends Questionn{
  constructor(id, prompt, options, correctAnswer){
    super(id,prompt)
    this.options=options
    this.correctAnswer=correctAnswer
  }

  display(){
    console.log(this.prompt)
    this.options.forEach((option,index)=>console.log(`${index+1}. ${option}`))
  }

  checkAnswer(answer){
    return this.correctAnswer===answer;
  }
}

export default MultipleChoiceQuestion;