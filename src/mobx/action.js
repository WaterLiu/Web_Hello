import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {observable, extendObservable, autorun, computed} from 'mobx';
import {action} from 'mobx';


@observer
class TimerView extends React.Component {

    
     test = {
        t1: '111',
        t2: 222
    }

    render() {
        return (
            <div>
                test = {this.test.t1}
                <button onClick={this.onClicked.bind(this)}>
                    {/*Seconds passed: {this.props.appState.timer}*/}
                    {/*index: {indexBox.get()};*/}
                    {/*testRef: {testRef}*/}


                </button>

                <button onClick={this.onClicked1.bind(this)}>
                    {/*Seconds passed: {this.props.appState.timer}*/}
                    {/*index: {indexBox.get()};*/}
                    {/*testRef: {testRef}*/}


                </button>
                <button onClick={this.onClicked2.bind(this)}>
                    {/*Seconds passed: {this.props.appState.timer}*/}
                    {/*index: {indexBox.get()};*/}
                    {/*testRef: {testRef}*/}
                </button>
            </div>



        );
    }
    @action.bound
    onClicked()
    {
       this.test.t1 = '22222';
    }
    @action.bound
    onClicked1()
    {
        this.test.t1 = '33333';
    }
    @action.bound
    onClicked2()
    {
        this.test.t1 = '44444';
    }

};




ReactDOM.render(<TimerView appState={111}/>, document.body);

