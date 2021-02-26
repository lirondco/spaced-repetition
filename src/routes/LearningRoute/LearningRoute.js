import React, { Component } from 'react'
import Feedback from '../../components/Feedback/Feedback';
import Word from '../../components/Word/Word'
import LearnContext from '../../contexts/LearnContext';
import LanguageApiService from '../../services/language-api-service';

class LearningRoute extends Component {
static contextType = LearnContext

state = {
  guess: '',
}

handleOnChange = e => {
  const guess = e.target.value
  this.setState({guess: guess})
}

componentDidMount() {
  LanguageApiService.getHead()
    .then(data => {
      if(!data) {
        console.error(data);
        throw new Error('Uh oh. Something went wrong.')
      }
      this.context.setNextWord(data.nextWord)
      this.context.setTotalScore(data.totalScore)
      this.context.setWordCorrectCount(data.wordCorrectCount)
      this.context.setWordIncorrectCount(data.wordIncorrectCount)
    })
    .catch(this.context.setError)
}

  handleNext = () => {
    this.context.setShowResult(false);
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const guess = this.state.guess
    console.log("submit" , guess)
    LanguageApiService.submitGuess(guess)
    .then(guess => {
      this.context.setLastWord(this.context.nextWord)
      this.context.clearError()
      this.context.setTotalScore(guess.totalScore)
      this.context.setWordCorrectCount(guess.wordCorrectCount)
      this.context.setWordIncorrectCount(guess.wordIncorrectCount)
      this.context.setNextWord(guess.nextWord)
      this.context.setAnswer(guess.answer)
      this.context.setGuess(guess)
      this.context.setIsCorrect(guess.isCorrect)
      this.context.setShowResult(true)
    })
    .catch(this.context.setError)
  }

  renderLearnPage = () => {
   if (this.context.showResult === true) {
      return (<Feedback 
      isCorrect = {this.context.isCorrect}
      lastWord = {this.context.lastWord}
      answer = {this.context.answer}
      guess = {this.context.guess}
      tryAnotherClick = {this.handleNext}
      total = {this.context.totalScore}
      />) 
    } else {
      return (<Word 
      word = {this.context.nextWord}
      handleGuess = {this.handleSubmit}
      onChange = {this.handleOnChange}
      total = {this.context.totalScore}
      correct= {this.context.wordCorrectCount}
      incorrect = {this.context.wordIncorrectCount}
     />)
    }
  }

  render() {
    return (
      <section>
        {this.renderLearnPage()}
      </section>
    );
  }
}

export default LearningRoute
