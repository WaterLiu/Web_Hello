import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {observable, extendObservable, autorun, computed} from 'mobx';
import {action} from 'mobx';

// observable objects
var appState = observable({
    timer: 0
});

// observable array
var todos = observable([
    { title: "Spoil tea", completed: true },
    { title: "Make coffee", completed: false }
]);

// observable.box  跟非box 方式有什么区别呢？
const indexBox = observable.box('0');

// @observable.ref
// extendObservable({
//     testRef: <div>testRef</div>
// }, {
//     testRef: observable.ref
// })

@observer
class TimerView extends React.Component {

    test = {
        t1: '111',
        t2: 222
    }

    render() {
        return (
            <button onClick={this.onReset.bind(this)}>
                {/*Seconds passed: {this.props.appState.timer}*/}
                {/*index: {indexBox.get()};*/}
                {/*testRef: {testRef}*/}
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
    // appState.timer += 1;
    // todos;
    let index = indexBox.get();
    indexBox.set(++index);
}, 1000);


ReactDOM.render(<TimerView appState={appState}/>, document.body);





const number = observable.box(10);
const plus = computed(() => number.get() > 0);

autorun(() => {
    console.log(plus.get());
});

number.set(-19);//false
number.set(-1);
number.set(1);//true


//https://blog.csdn.net/qq_23921097/article/details/81095055


