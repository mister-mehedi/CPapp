import Question from './Question.js'
import MultipleChoiceQuestion from './MultipleChoiceQuestion.js'
import CodingQuestion from './CodingQuestion.js'
import User from './User.js'
import PracticeSession from './PracticeSession.js'



class LeaderBoard{
  constructor(){
    this.leaderboard=[]
  }

  addUser(user){
    this.leaderboard.push(user)
  }

  display(){
    this.leaderboard.forEach((user,index)=>{
      console.log(`${index+1}. ${user.username} - Solved ${user.solvedQuestion.length} problems`)
    })
  }
}