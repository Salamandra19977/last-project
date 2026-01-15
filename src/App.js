import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TestQuestion from './components/TestQuestion.jsx'
import StartQuiz from './components/StartQuiz.jsx'
import QuizResults from './components/QuizResults.jsx'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuizStarted: false,
      showResults: false,
      questionNumber: 0,
      userAnswers: []
    }

    this.startQuiz = this.startQuiz.bind(this)
    this.stopQuiz = this.stopQuiz.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
  }

  quiz1 = {
    quizName: "HTML test",
    quizDescription: "5-15 onl/off test",
    questions: [
      {
        questionId: 1,
        questionText: "Which tag is used for styling?",
        answers: ["h1", "style", "script", "input"],
        correctAnswer: "style"
      },
      {
        questionId: 2,
        questionText: "Which tag is used for scripting?",
        answers: ["h1", "style", "script", "input"],
        correctAnswer: "script"
      },
      {
        questionId: 3,
        questionText: "Which tag is used for heading?",
        answers: ["h1", "style", "script", "input"],
        correctAnswer: "h1"
      }
    ],
    time: 300
  }

  nextQuestion() {
    if (this.state.questionNumber !== this.quiz1.questions.length - 1) {
      this.setState({
        questionNumber: this.state.questionNumber + 1
      })
    }
  }

  previousQuestion() {
    if (this.state.questionNumber > 0) {
      this.setState({
        questionNumber: this.state.questionNumber - 1
      })
    }
  }

  startQuiz() {
    this.setState({
      isQuizStarted: true,
      questionNumber: 0
    })
  }

  stopQuiz(answers) {
    this.setState({
      isQuizStarted: false,
      showResults: true,
      userAnswers: answers
    })
  }

  tryAgain() {
    this.setState({
      isQuizStarted: false,
      questionNumber: 0,
      userAnswers: [],
      showResults: false
    })
  }

  render() {
    return (
      <>
        <Header />
        {this.state.isQuizStarted ? (
          <TestQuestion 
            questionId={
              this.quiz1.questions[this.state.questionNumber].questionId
            }
            questionText={
              this.quiz1.questions[this.state.questionNumber].questionText
            }
            answers={
              this.quiz1.questions[this.state.questionNumber].answers
            }
            correctAnswer={
              this.quiz1.questions[this.state.questionNumber].correctAnswer
            }
            count={this.quiz1.questions.length}
            time={this.quiz1.time}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            stopQuiz={this.stopQuiz}
          />
        ) : this.state.showResults ? (
          <QuizResults
            info={this.quiz1}
            results={this.state.userAnswers} 
            tryAgain={this.tryAgain}
          />
        ) : (
          <StartQuiz 
            name={this.quiz1.quizName}
            description={this.quiz1.quizDescription}
            startQuiz={this.startQuiz}
          />
        )

        }

        <Footer />
      </>
    )
  }
}

export default App