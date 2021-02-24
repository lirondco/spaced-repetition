import React, { Component } from 'react'
import './DashboardWords.css'

export default class DashboardWords extends Component {
    static defaultProps = {
        words: []
    }

    renderWords = () => {
        if(this.props.words.length === 0) {
            return <h5>No words to practice</h5>
        }
        return (
        <ul className = 'word'>
        {this.props.words.map(word => {
            return (
                <li className = 'word' key={word.id}>
                <h4 lang='he' dir='rtl'>{word.original}</h4>
                <p>correct answer count: {word.correct_count}</p>
                <p>incorrect answer count: {word.incorrect_count}</p> 
            </li>
            )
        })}
        </ul>
        )
    }

    render() {
        return (
            <div className = 'dashboard_words'>
                <h3 className='words_header'>Words to practice</h3>
                {this.renderWords()}
            </div> 
        )
    }
}