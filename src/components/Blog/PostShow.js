import React, {Component} from 'react';
import {Button, Collapse, Well} from 'react-bootstrap';
import Comment from "../Comment/Comment";
import {fetchPost} from "../../actions";
import {connect} from 'react-redux';
import _ from 'lodash';

class PostShow extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {

        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>{post.name}</h1>
                <p>
                    {post.content};
                </p>
                <hr/>
                <h2>Comments</h2>
                {this.renderComments()}
            </div>
        );
    }

    renderComments() {
        return (
            <div>
                <Button onClick={() => this.setState({open: !this.state.open})}>
                    Open comments
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            {
                                _.map(this.props.post.comments, comment => {
                                    return (
                                        <Comment key={comment.id} value={comment.text}/>
                                    );
                                })
                            }
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost})(PostShow);
