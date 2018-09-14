import React from 'react';

/**
 * Props
 * 1. Title
 * 2. Content
 */

class Props extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h2>Props Example</h2>
                <p>Title = {this.props.title}</p>
                <p>Content = {this.props.content}</p>
            </div>
        );
    }
}


export default Props;
