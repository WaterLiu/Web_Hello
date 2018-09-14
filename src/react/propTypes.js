import React from 'react';
import PropTypes from 'prop-types';

class PropTypesE extends React.Component {

    constructor(props) {
        super(props);

        // this.props.testStr = 'test';
        // this.props.testInt = 10;

        // this.props = {
        //     testStr : '',
        //     testInt : 0
        // };

        return this;
    }

    componentWillMount() {
        console.log('1111');
    }

    render() {
        return (
            <div>
                <h2>PropTypes Example</h2>
            </div>
        );
    }
}


PropTypes.prototype = {
    testStr: PropTypes.string,
    testInt: PropTypes.number
};


export default PropTypesE;
