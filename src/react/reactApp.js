import React from 'react';
import Refs from './refs';
import Props from './props';
import State from './state';
import Life from './lifecycle';
import PropTypesE from './propTypes';

import '../lib/reveal.js/css/reveal.css';
import '../lib/reveal.js/css/theme/white.css';
import '../lib/reveal.js';
import '../lib/reveal.js/lib/js/head.min.js';
import '../lib/reveal.js/plugin/zoom-js/zoom';
// import '../lib/reveal.js/plugin/highlight/highlight';


import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import '../main.css';

class ReactApp extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            value: 0,
            themeColor: 'waterColor',
        };



        // Reveal.initialize({
        //     controls: true,
        //     progress: true,
        //     history: true,
        //     center: true,
        //     // default/cube/page/concave/zoom/linear/fade/none
        //     transition: 'none',
        // });

    }

    componentDidMount() {

        $("#draggable").draggable();

        // Reveal.initialize({
        //     controls: true,
        //     progress: true,
        //     history: true,
        //     center: true,
        //
        //     transition: 'slide' // none/fade/slide/convex/concave/zoom
        //
        //     // More info https://github.com/hakimel/reveal.js#dependencies
        //     // dependencies: [
        //     //     { src: '../lib/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        //     //     { src: '../lib/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        //     //     { src: '../lib/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        //     //     { src: '../lib/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        //     //     { src: '../lib/reveal.js/plugin/search/search.js', async: true },
        //     //     { src: '../lib/reveal.js/plugin/zoom-js/zoom.js', async: true },
        //     //     { src: '../lib/reveal.js/plugin/notes/notes.js', async: true }
        //     // ]
        // });
    }

    buttonClicked() {
        this.state.value++;
        this.setState({value:this.state.value});
    }

    render() {
        return (
            <div>
                <Props title={"Title Props"} content={'Content Props'}/>
                <State />
                <Refs />
                <Life test={this.state.value} callback={this.buttonClicked.bind(this)}/>
                <PropTypesE />
            </div>
        );
    }
}


export default ReactApp;

