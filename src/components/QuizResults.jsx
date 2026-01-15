import React, { Component } from 'react'
import styles from "../styles/components/testQuestion.module.scss"

export class QuizResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correctCount: 0
        }
    }

    componentDidMount() {
        this.props.info.questions.forEach((question, i) => {
            question.correctAnswer === this.props.results[i] &&
                this.setState((prev) => ({
                    correctCount: prev.correctCount + 1
                }))
        });
    }

    render() {
        return (
            <div className={styles.testQuestion}>
                <h2>{this.props.quizName}</h2>
                <p>
                    Result: {this.state.correctCount} / 
                    {this.props.info.questions.length}

                </p>
                <button
                    onClick={this.props.tryAgain}
                >
                    Try again
                </button>
            </div>
        )
    }
}

export default QuizResults