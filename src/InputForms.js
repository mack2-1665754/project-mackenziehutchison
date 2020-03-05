import React from 'react';

export class InputForms extends React.Component {

    render() {
        let inputBoxes = [];
        this.props.inputs.forEach((input) => {
            let inputObject = Object.keys(input)
            inputObject.forEach((key) => {
                let newInput = (
                    <label>
                        {input[key]}
                        {/*the state at the key will be assigned*/}
                        <input type="number" name={key} onSubmit = {(event, newValue) => this.props.onSubmit
                        (key, newValue)}/>
                    </label>
                )
                inputBoxes.push(newInput);
            })
        });

        return (
            <form className="form">
                {inputBoxes} <br/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
