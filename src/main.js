import React from "react";
import ReactDOM from "react-dom";
import ReactApp from './react/reactApp';

// var $ = require("jquery");
// require("jquery-ui/ui/widgets/draggable");
// require('./main.css');



$(document).ready(function () {
    // document.getElementById('jquery-app').innerHTML="hello world!";
    // $('#draggable').addClass('draggable');
    // $("#draggable").draggable();

    ReactDOM.render(<ReactApp />, document.getElementById('react-app'));
});




