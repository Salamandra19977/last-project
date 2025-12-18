import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TestQuestion from './components/TestQuestion.jsx'

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <TestQuestion 
          questionId={1}
          questionText="Хто каже гав гав?"
          answers={["кіт", "собака", "папуга"]}
        />
        <TestQuestion 
          questionId={2}
          questionText="Хто каже мяв мяв?"
          answers={["кіт", "собака", "папуга"]}
        />
        <Footer />
      </>
    )
  }
}

export default App