// Abstract Question class
class Question {
  constructor(id, prompt) {
    if (this.constructor === Question) {
      throw new Error("Cannot instantiate abstract class.");
    }
    this.id = id;
    this.prompt = prompt;
  }

  display() {
    throw new Error("Method 'display()' must be implemented.");
  }

  checkAnswer(answer) {
    throw new Error("Method 'checkAnswer()' must be implemented.");
  }
}

// Interface for multiple-choice questions
class MultipleChoiceQuestion extends Question {
  constructor(id, prompt, options, correctAnswer) {
    super(id, prompt);
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  display() {
    console.log(this.prompt);
    this.options.forEach((option, index) => console.log(`${index + 1}. ${option}`));
  }

  checkAnswer(answer) {
    return this.correctAnswer === answer;
  }
}

// Inheritance example: Coding question class
class CodingQuestion extends Question {
  constructor(id, prompt, solution) {
    super(id, prompt);
    this.solution = solution;
  }

  display() {
    console.log(this.prompt);
  }

  checkAnswer(answer) {
    return this.solution === answer;
  }
}

// User class with encapsulation
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.solvedQuestions = [];
    this.progress = {};
  }

  addSolvedQuestion(questionId) {
    this.solvedQuestions.push(questionId);
  }

  updateProgress(topic, status) {
    this.progress[topic] = status;
  }
}

// Practice Session to handle OOP logic for practice
class PracticeSession {
  constructor(user) {
    this.user = user;
    this.questions = [];
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  start() {
    this.questions.forEach((question) => {
      question.display();
      // simulate answering process
      // let answer = prompt("Enter your answer:");
      let answer='O(log n)'
      if (question.checkAnswer(answer)) {
        console.log("Correct!");
        this.user.addSolvedQuestion(question.id);
      } else {
        console.log("Incorrect. Try again!");
      }
    });
  }
}

// Leaderboard class to track top performers
class Leaderboard {
  constructor() {
    this.leaderboard = [];
  }

  addUser(user) {
    this.leaderboard.push(user);
  }

  display() {
    this.leaderboard.forEach((user, index) => {
      console.log(`${index + 1}. ${user.username} - Solved ${user.solvedQuestions.length} problems`);
    });
  }
}

// Create Users and Questions
const user1 = new User('John', 'john@example.com');
const user2 = new User('Alice', 'alice@example.com');

const question1 = new MultipleChoiceQuestion(1, "What is the time complexity of binary search?", ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'], 'O(log n)');
const question2 = new CodingQuestion(2, "Write a function to find the factorial of a number", "O(log n)");

// Start a practice session
const session = new PracticeSession(user1);
session.addQuestion(question1);
session.addQuestion(question2);
session.start();

// Display Leaderboard
const leaderboard = new Leaderboard();
leaderboard.addUser(user1);
leaderboard.addUser(user2);
leaderboard.display();
