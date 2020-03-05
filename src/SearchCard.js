import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './css/WebpageStyle.css'
import {InputBox} from './InputBox'

import {GoButton} from './Button'

export class SearchCard extends React.Component {
    constructor(props) {
        super(props)
    }

    //this.props.header
    //this.props.text
    render() {
        return (
            <Card className= "card" bg = 'primary' border = 'primary'>
                <Card.Header className="card-header" as="h2">{this.props.header}</Card.Header>
                <Card.Body className="card-body">
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                    <div>
                    <InputBox /> 
                    </div>
                    <GoButton color="primary" text= "Go" />
                </Card.Body>
            </Card>
        );
    }
}

