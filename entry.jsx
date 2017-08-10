/**
 * Created by lmy on 17-8-10.
 */
import React, {Component} from 'react';
import {render} from "react-dom";

class HelloMessage extends React.Component {

    render() {
        return <div>Hello World</div>;
    }
}
render(<HelloMessage />, document.getElementById('app'));
