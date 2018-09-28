import React from 'react';
import PropTypes from 'prop-types';

export default class ClassE extends React.Component {

    water = '测试';

    static propTypes = {
        store: PropTypes.object.isRequired,
        children: PropTypes.any
    }


    constructor(props, context) {
        super(props, context);

        this.store = props.store;
    }

    getChildContext() {
        return {store: this.store};
    }

    render() {
        console.log(this.water);
        return <div>你好</div>;
    }
}

ClassE.childContextTypes = {
    store: PropTypes.string
};

// ClassE.propTypes = {
//     store: PropTypes.string.isRequired,
//     children: PropTypes.any
// };


