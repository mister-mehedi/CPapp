//import Question from './Question.js'
import MultipleChoiceQuestion from './MultipleChoiceQuestion.js'
import CodingQuestion from './CodingQuestion.js'
import User from './User.js'
import PracticeSession from './PracticeSession.js'
import Leaerboard from './Leaerboard.js'



const user1=new User('Mehdi','meh@gmail.com')
const user2=new User('hasan','has@gmail.com')

const ques1=new MultipleChoiceQuestion(1,"Tc of BS?",['O(n)','O(log n)','O(n^2)','O(1)'], 'O(lg n)')
const ques2=new CodingQuestion(1,"Write facto.",'fac!')

const sess=new PracticeSession(user1)
sess.addQuestion(ques1)
sess.addQuestion(ques2)
sess.start()


const ldrb=new Leaerboard()
ldrb.addUser(user1)
ldrb.addUser(user2)
ldrb.display()