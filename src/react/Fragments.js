import React from 'react';

//React 中一个常见模式是为一个组件返回多个元素。Fragments 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点。

/*
    动机：https://www.reactjscn.com/docs/fragments.html
 */

class Fragments extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        );
    }
}

export default Fragments;
