import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Deck} from './cardDeck.js'
import {PageHeader} from './PageHeader.js'
import {PageFooter} from './PageFooter.js'
import {InputForms} from './InputForms.js'
import {EstimateBarChart} from './barChart.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/WebpageStyle.css'


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testInputs: [
        {'incubation.lowerBounds': "The incubation period lasts from"},
        {'incubation.upperBounds': " days to "}
      ],
      cardContent: [{
            cardHeader: "How Does the Flu Affect Us?",
            cardText: "Dangers of the flu are very commonly overlooked, due to the normalization of the illness. It is important for people to understand the need for vaccinations, in the context of how dangerous these outbreaks can actually be. Despite being an illness which is present each year, it can still have drastic effects on our community, if we forego precautionary measures."      
      }]
    }
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  render() {
      const data = [{name: 'Your Estimate', value: 400}, {name: 'Average Estimate', value: 400}, {name: 'Actual Value', value: 400}];
      return (
        <div>
          <PageHeader />
          <Deck cardContent={this.state.cardContent}/>
          <InputForms inputs={this.state.testInputs} />
          <EstimateBarChart data={data} name={"name"} value={"value"}/>
          <PageFooter />
        </div>
      );
  }
}

