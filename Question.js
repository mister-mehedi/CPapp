// Abstract Class
class Question{
  constructor(id,prompt){
    if(this.constructor===Question){
      throw new Error("cannot Instantiate abstract class.")
    }

    this.id=id;
    this.prompt=prompt;
  }

  display(){
    throw new Error("Method 'display()' must be implemeted")
  }

  checkAnswer(){
    throw new Error("Method 'checkAnswer()' must be implemeted")
  }
}

export default Question;