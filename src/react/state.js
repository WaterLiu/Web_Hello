import React from 'react';


class State extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            clickCount: 0
        }
    }

    // Private
    buttonClicked() {
        this.state.clickCount++;
    }

    inputClicked() {
        this.setState({clickCount : ++this.state.clickCount});
    }

    render() {
        return (
            <div>
                <h2>State Example</h2>

                <button onClick={this.buttonClicked.bind(this)}
                        style={{display: 'block'}}>
                    Button
                </button>

                <input type={'button'}
                       value={'Result =' + this.state.clickCount}
                       onClick={this.inputClicked.bind(this)}
                />
            </div>
        );
    }

}

export default State;
