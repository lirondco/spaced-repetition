import React, { Component} from 'react'
import Button from '../Button/Button'
import './Feedback.css'


export default class Feedback extends Component {

    firstInput = React.createRef()

    componentDidMount() {
        this.firstInput.current.focus()
      }

    renderMessage = () => {
        if (this.props.isCorrect === true) {
            return <h2>You were correct! :D</h2> 
        } else {
            return <h2>Good try, but not quite right :(</h2>
        }
    }


    render() {
        return (
            <div className="feedback">
                {this.renderMessage()}
                <div className = "DisplayScore"><p>Your total score is: {this.props.total}</p></div>
                <div className = "DisplayFeedback"><p>The correct translation for <span lang="he" dir="rtl">{this.props.lastWord}</span> was {this.props.answer} and you chose {this.props.userAnswer}!</p></div>
                <Button ref={this.firstInput} onClick={this.props.tryAnotherClick}>
                    Try another word!
                </Button>
            </div>
        )
    }
}