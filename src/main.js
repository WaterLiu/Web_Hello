import React from "react";
import ReactDOM from "react-dom";
import {observer} from 'mobx-react';
// import ReactApp from './react/reactApp';
// import {BasicExample} from './react-router/router';
// import './main.css';
// import {ButtonClicked} from './JS/arrowMethod';
// import ClassE from './JS/classE';
// import MobxE from './mobx';


// let ExampleConfig = 'React';
// let ExampleConfig = 'React-Rountr';
// let ExampleConfig = 'JS';
// let ExampleConfig = 'mobx';
{/*<button onClick={this.buttonClicked.bind(this)}>测试button</button>*/}

// $(document).ready(function () {
//
//     if (ExampleConfig === 'React')
//     {
//         ReactDOM.render(<ReactApp id={'react_app'}/>, document.getElementById('react-app'));
//     }
//     else if (ExampleConfig === 'React-Rountr')
//     {
//         ReactDOM.render(<BasicExample />, document.getElementById('react-app'));
//     }
//     else if (ExampleConfig === 'JS')
//     {
//         let parent = document.getElementById('react-app');
//         let btn = document.createElement("button");
//         btn.innerHTML = "测试button";
//         btn.onclick = ()=>{
//             ButtonClicked();
//         }
//         parent.appendChild(btn);
//
//
//         ReactDOM.render(<ClassE store={'water'}/>, document.getElementById('react-app'));
//     }
//     else if(ExampleConfig === 'mobx')
//     {
//         // require('./mobx');
//         require('./mobx/action');
//     }
//     else
//     {
//
//     }
// });



import Data from './mobx/data'

@observer
class Wrapper extends React.Component
{
    data = new Data();

    constructor(props) {
        super(props);

    }

    onClicked() {

        this.data.subdata.subdata = this.data.subdata.subdata + 1;
        this.data.data = this.data.data + 1;
        console.log('onClicked');
    }


    render() {
        return (
            <div>
                <button onClick={this.onClicked.bind(this)}>BUTTON</button>
                {/*<div>{'subdata = ' + this.data.subdata.subdata}</div>*/}
                <div>{'data = '+ this.data.data}</div>
            </div>
        );
    }
}

ReactDOM.render(<Wrapper/>, document.getElementById('react-app'));














