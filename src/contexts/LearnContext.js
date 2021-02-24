import React, { Component } from 'react'

const defaultState = {
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    nextWord: null,
    guess: null,
    lastWord: null,
    isCorrect: null,
    answer: null,
    error: null,
    showResult: false,
}

const LearnContext = React.createContext({
    ...defaultState,
    setError: () => {},
    clearError: () => {},
    setNextWord: () => {},
    setTotalScore: () => {},
    setWordCorrectCount: () => {},
    setWordIncorrectCount: () => {},
    setGuess: () => {},
    setAnswer: () => {},
    setLastWord: () => {},
    setIsCorrect: () => {},
    reset: () => {},
    setShowResult: () => {},
})

export default LearnContext

export class LearnProvider extends Component {
    state = { 
        ...defaultState
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setTotalScore = totalScore => {
        this.setState({ totalScore })
    }

    setWordCorrectCount = wordCorrectCount => {
        this.setState({ wordCorrectCount })
    }

    setWordIncorrectCount = wordIncorrectCount => {
        this.setState({ wordIncorrectCount })
    }

    setNextWord = nextWord => {
        this.setState({ nextWord })
    }

    setGuess = guess => {
        this.setState({ guess })
    }

    setLastWord = lastWord => {
        this.setState({ lastWord })
    }

    setIsCorrect = isCorrect => {
        this.setState({ isCorrect })
    }

    setAnswer = answer => {
        this.setState({ answer })
    }

    reset = () => {
        this.setState({
            ...defaultState
        })
    }

    setShowResult = (bool) => {
        this.setState({ showResult: bool })
    }

    render() {
        const value = {
            totalScore: this.state.totalScore,
            wordCorrectCount: this.state.wordCorrectCount,
            wordIncorrectCount: this.state.wordIncorrectCount,
            nextWord: this.state.nextWord,
            guess: this.state.guess,
            lastWord: this.state.lastWord,
            isCorrect: this.state.isCorrect,
            answer: this.state.answer,
            error: this.state.error,
            showResult: this.state.showResult,
            setError: this.setError,
            clearError: this.clearError,
            setTotalScore: this.setTotalScore,
            setWordCorrectCount: this.setWordCorrectCount,
            setWordIncorrectCount: this.setWordIncorrectCount,
            setNextWord: this.setNextWord,
            setGuess: this.setGuess,
            setLastWord: this.setLastWord,
            setIsCorrect: this.setIsCorrect,
            setAnswer: this.setAnswer,
            reset: this.reset,
            setShowResult: this.setShowResult,
        }
        return (
            <LearnContext.Provider value={value}>
                {this.props.children}
            </LearnContext.Provider>
        )
    }
}