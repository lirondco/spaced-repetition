import React, { Component} from 'react'
import Button from '../Button/Button'
import './Feedback.css'


export default class Feedback extends Component {

    renderMessage = () => {
        if (this.props.isCorrect === true) {
            return <h2>You were correct! :D</h2> 
        } else {
            return <h2>Good try, but not quite right :(</h2>
        }
    }

    render() {
        console.log(this.props, "feedback props")
        return (
            <div className="feedback">
                {this.renderMessage()}
                <p className = "DisplayScore">Your total score is: {this.props.total}</p>
                <p className = "DisplayFeedback">The correct translation for <span lang="he" dir="rtl">{this.props.lastWord}</span> was {this.props.answer} and you chose {this.props.guess.answer}!</p>
                <Button onClick={this.props.tryAnotherClick}>
                    Try another word!
                </Button>
            </div>
        )
    }
}