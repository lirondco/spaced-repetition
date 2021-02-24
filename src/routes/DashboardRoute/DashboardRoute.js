import React, { Component } from 'react'
import DashboardLanguage from '../../components/DashboardLanguage/DashboardLanguage'
import DashboardWords from '../../components/DashboardWords/DashboardWords'
import LanguageContext from '../../contexts/LanguageContext'
import LanguageApiService from '../../services/language-api-service'

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then(this.context.setLanguage)
      .then(this.context.clearError)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearLanguage();
  } 

  renderLanguage() {
    const { language = {} } = this.context
    return (
      <DashboardLanguage 
      id={language.id}
      name={language.name}
      total_score={language.total_score}/>
    )
  }

  renderWords() {
    const { words = [] } = this.context
    return (
      <DashboardWords words={words} />
    )
  }

  render() {
    return (
      <section>
        {this.renderLanguage()}
        {this.renderWords()}
      </section>
    );
  }
}

export default DashboardRoute
