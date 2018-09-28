import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {action} from 'mobx';

var appState = observable({
    timer: 0
});

@observer
class TimerView extends React.Component {
    render() {
        return (
            <button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
    }

    onReset() {
        this.props.appState.resetTimer();
    }
};


appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(function tick() {
    appState.timer += 1;
}, 1000);

ReactDOM.render(<TimerView appState={appState}/>, document.body);
