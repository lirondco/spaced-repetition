import React, { Component } from 'react'


const LanguageContext = React.createContext ({
    main: {},
    language: {},
    words: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setLanguage: () => {},
    clearLanguage: () => {},
})

export default LanguageContext

export class LanguageProvider extends Component {
    state = {
        main: {},
        language: {},
        words: [],
        error: null,
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    
    clearError = () => {
        this.setState({ error: null })
    }

    setLanguage = main => {
        this.setState({ main, language: main.language, words: main.words })
    }

    clearLanguage = () => {
        this.setState({ language: {} })
    }

    render() {
        const value = {
            main: this.state.main,
            error: this.state.error,
            language: this.state.language,
            words: this.state.words,
            setError: this.setError,
            clearError: this.clearError,
            setLanguage: this.setLanguage,
            clearLanguage: this.clearLanguage,
        }
        return (
            <LanguageContext.Provider value={value}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}