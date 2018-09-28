import React from 'react';


class Refs extends React.Component{

    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.textInput1 = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    componentDidMount(){

    }

//  Private
    focusTextInput() {
        this.textInput.current.value = this.textInput1.current.value;
    }

    render() {
        return (
            <div>
                <h2>Refs Example</h2>
                <input id={'text'} type="text" ref={this.textInput}/>
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} ref={this.textInput1}/>
            </div>
        )
    }
}

export default Refs;
