import React from 'react';

//JSX 子代例子

class PropsChildren extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // let children = this.props.children;
        // console.log(children);
    }

    render() {


        return (
            <div>
                <h2>Props.Children Example</h2>
                {this.props.children}
            </div>
        );
    }
}

export default PropsChildren;
