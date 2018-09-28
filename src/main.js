import React from "react";
import ReactDOM from "react-dom";
import ReactApp from './react/reactApp';
import {BasicExample} from './react-router/router';
import './main.css';
import {ButtonClicked} from './JS/arrowMethod';
import ClassE from './JS/classE';
import MobxE from './mobx';


// let ExampleConfig = 'React';
// let ExampleConfig = 'React-Rountr';
// let ExampleConfig = 'JS';
let ExampleConfig = 'mobx';
{/*<button onClick={this.buttonClicked.bind(this)}>测试button</button>*/}

$(document).ready(function () {

    if (ExampleConfig === 'React')
    {
        ReactDOM.render(<ReactApp id={'react_app'}/>, document.getElementById('react-app'));
    }
    else if (ExampleConfig === 'React-Rountr')
    {
        ReactDOM.render(<BasicExample />, document.getElementById('react-app'));
    }
    else if (ExampleConfig === 'JS')
    {
        let parent = document.getElementById('react-app');
        let btn = document.createElement("button");
        btn.innerHTML = "测试button";
        btn.onclick = ()=>{
            ButtonClicked();
        }
        parent.appendChild(btn);


        ReactDOM.render(<ClassE store={'water'}/>, document.getElementById('react-app'));
    }
    else if(ExampleConfig === 'mobx')
    {


    }
    else
    {

    }
});




