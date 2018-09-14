import React from 'react';


class Lifecycle extends React.Component {

    static defaultProps = {
        testStr : 'str',
        testInt : 0
    };

    constructor(props) {
        super(props);

        this.state = {
            clickCount : 0
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');

        if (this.state.clickCount > 10)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }


    // Private

    buttonClicked(){
        this.state.clickCount++;
        this.setState({clickCount: this.state.clickCount});
    }


    render() {
        return (
            <div id={'lifeCycleId'}>
                <h2>LifeCycle Example</h2>
                <button onClick={this.buttonClicked.bind(this)}> Click Me </button>
                <div style={{width:'100px', height:'20px', background:'#E1E1E1'}}>
                    {'clickCount = ' + this.state.clickCount}
                </div>
            </div>
        );
    }

}

export default Lifecycle;
