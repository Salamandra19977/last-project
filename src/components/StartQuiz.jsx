import React, { Component } from 'react'
import styles from "../styles/components/testQuestion.module.scss"

export class StartQuiz extends Component {
  render() {
    return (
      <div className={styles.testQuestion }>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <button onClick={() => this.props.startQuiz()} className={styles.btn}>Start</button>
      </div>
    )
  }
}

export default StartQuiz