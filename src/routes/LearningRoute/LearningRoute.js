import React, { Component } from 'react'
import Word from '../../components/Word/Word'
import LearnContext from '../../contexts/LearnContext';
import LanguageApiService from '../../services/language-api-service';

class LearningRoute extends Component {
static contextType = LearnContext

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

  render() {
    return (
      <section>
        <Word 
         word = {this.context.nextWord}
         handleGuess = "Change this"
         total = {this.context.totalScore}
         correct= {this.context.wordCorrectCount}
         incorrect = {this.context.wordIncorrectCount}
        />
      </section>
    );
  }
}

export default LearningRoute
