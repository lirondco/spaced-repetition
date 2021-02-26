import React, { Component } from 'react'
import Button from '../Button/Button'
import { Input, Label } from '../Form/Form'
import './Word.css'

export default class Word extends Component {
    render() {
        return (
            <div className = "guess_word">
                <h2 className = "word_label">Translate the word:</h2>
                <span lang='he' dir='rtl' className = "actuaL_word">{this.props.word}</span>
                <form className = "guess_form" htmlFor="guessForm" onSubmit = {e => {console.log(e)
                this.props.handleGuess(e)}}>
                    <Label 
                        htmlFor = "learn-guess-input"
                    >
                        What's the translation for this word?
                    </Label>
                    <Input 
                        id = "learn-guess-input"
                        name = "guess"
                        type = "text"
                        onChange = {this.props.onChange}
                        required
                    />
                    <Button 
                        type = "submit"
                    >
                        Submit your answer
                    </Button>
                </form>
                <p>Your total score is: {this.props.total}</p>
                <p>You have answered this word correctly {this.props.correct} times.</p>
                <p>You have answered this word incorrectly {this.props.incorrect} times.</p>
            </div>
        )
    } 
}