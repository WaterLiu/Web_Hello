import React from 'react';
import PropTypes from 'prop-types';

class PropTypesE extends React.Component {


    static propTypes = {
        testStr: PropTypes.string,
        testInt: PropTypes.number
    };

    constructor(props) {
        super(props);

        return this;
    }

    render() {
        return (
            <div>
                <h2>PropTypes Example</h2>
            </div>
        );
    }
}


export default PropTypesE;
