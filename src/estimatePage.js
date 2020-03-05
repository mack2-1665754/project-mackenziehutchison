import React from 'react';
import {forms} from './forms.js';

handleChange = (key, value) => {
    this.setState({[key]: value})
}

handleChange = (key, value) => {
    //handlechange should recalculate the avergae
    let newArray = this.state.estimates;
    newArray.push(this.state.estimates)
    this.setState({
        key: value,
        estimates: this.state.estimates.push(value)
    })
}

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avgGuessedIncubation: {
                lowerBounds: 0,
                upperBounds: 0
            }, guessedIncubation: {
                lowerBounds: 0,
                upperBounds: 0
            }, actualIncubation: {
                lowerBounds: 0,
                upperBounds: 0
            }, hospGuess: 0,
            avgHospGuess: 0,
            actualHosp: 460
        }
    }

    render() {
        <form inputs = {["lowerBounds", "upperBounds"] onsubmit = {this.handleChange.bind(this)}/>
    }
}