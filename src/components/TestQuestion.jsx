import React, { Component } from 'react'
import styles from "../styles/components/testQuestion.module.scss"

export class TestQuestion extends Component {
  constructor(props) {
    super(props)
    this.addAnswer = this.addAnswer.bind(this)
    this.state = {
      userAnswers: [],
      time: props.time
    }
  }

  addAnswer(e) {
    this.setState((prev) => {
      prev.userAnswers[this.props.questionId - 1] = e.target.value
      return prev
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.questionId !== this.props.questionId) {
      document.querySelectorAll("input").forEach((input) => {
        input.checked = this.state.userAnswers[this.props.questionId - 1] === input.value
      })
    }

    if (this.state.time <= 0) {
      this.props.stopQuiz(this.state.userAnswers)
    }
  }

  componentDidMount() {
    this.indervalId = setInterval(() => {
      this.setState((prev) => ({...prev, time: prev.time - 1}))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.indervalId)
  }


  render() {
    return (
      <div className={styles.testQuestion}>
        <p>Time: {this.state.time}</p>
        <h2>Question #{this.props.questionId} {this.props.questionText}</h2>
        <ul>
          {this.props.answers.map((answer, index) => (
            <li key={index}>
              <input
                onChange={this.addAnswer} 
                type="radio" 
                name={`answer${this.props.questionId}`}
                id={`answer${index + 1}`}
                value={answer}
              />
              <label htmlFor={`answer${index + 1}`}>{answer}</label>
            </li>
          ))}
        </ul>
        <div className={styles.btns}>
          <button 
            className={styles.btn}
            onClick={() => this.props.previousQuestion()}
            hidden={this.props.questionId === 1}
          >
            Previous
          </button>

          <button 
            className={styles.btn}
            onClick={() => this.props.stopQuiz(this.state.userAnswers)}
          >
            Stop
          </button>

          <button
           className={styles.btn}
           onClick={() => this.props.nextQuestion()}
           disabled={this.props.questionId === this.props.count}
          >
            Next
          </button>
        </div>
        <progress
          // value={
          //   this.state.userAnswers.length
          // }
          value = {
            this.state.userAnswers.filter(answer => answer !== undefined).length
          }
          max={this.props.count}
        >
        </progress>
      </div>
    )
  }
}

export default TestQuestion