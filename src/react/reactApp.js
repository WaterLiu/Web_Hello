import React from 'react';

var $ = require("jquery");
require("jquery-ui/ui/widgets/draggable");
require('../main.css');

class ReactApp extends React.Component {

    constructor(props) {
        super(props);
        $("#draggable").draggable;
    }

    render() {
        return (
            <div id={'test'}> HelloWorld </div>
        );
    }
}

export default ReactApp;

