import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';

class Comment extends Component{

    render() {
        return(
            <div>{this.props.value}</div>
        );
    }
}

export default Comment;