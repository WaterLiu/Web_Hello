import React from "react";
import ReactDOM from "react-dom";
import ReactApp from './react/reactApp';
import './main.css'

// var $ = require("jquery");
// require("jquery-ui/ui/widgets/draggable");
// require('./main.css');


$(document).ready(function () {
    // document.getElementById('jquery-app').innerHTML="hello world!";
    // $('#draggable').addClass('draggable');
    // $("#draggable").draggable();

    // let f = new testF();
    ReactDOM.render(<ReactApp id={'react_app'}/>, document.getElementById('react-app'));
});




