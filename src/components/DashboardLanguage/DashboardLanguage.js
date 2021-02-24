import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DashboardLanguage.css'

export default class DashboardLanguage extends Component {
    renderLanguage = () => {
        if (!this.props.id) {
            return (
                <div className = 'langinfo'>
                <h2>No language selected</h2>
                </div>
            )
        }
        return (
            <div className = 'langinfo'>
            <h2>{this.props.name}</h2>
            <p>Total correct answers: {this.props.total_score}</p>
            </div>
        )
    }

    renderPracticeLink = () => {
        if (!this.props.id) {
            return (
                <h4>No language to practice</h4>
            )
        }
        return (
            <Link className = 'learn_link' to = '/learn'>
            Start practicing
            </Link>
        )
    }

    render() {
        return (
            <div className = 'dashboard_lang'>
                {this.renderLanguage()}
                <div className = 'learn_link_container'>
                    {this.renderPracticeLink()}
                </div>
            </div> 
        )
    }
}