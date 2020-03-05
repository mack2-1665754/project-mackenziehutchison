import React from "react";
import Button from "@material-ui/core/Button";

export class GoButton extends React.Component {
  constructor(props) {
    //props.color
    //props.text
    super(props);
  }
  render() {
      return (
        <Button variant="contained" color={this.props.color} text={this.props.text}>
          {this.props.text}
        </Button>  
      );
  }
}