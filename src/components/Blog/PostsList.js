import React, {Component} from 'react';
import {Media, PageHeader, Well} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPosts} from "../../actions";
import _ from 'lodash';

class PostsList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderOnePostPreview() {
        return _.map(this.props.posts, post => {
            return (
                <Well key={post.id}>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src="./public/img/thumbnail.png" alt="thumbnail"/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading><Link to={`/post/${post.id}`}>{post.name}</Link></Media.Heading>
                            <p>{post.content}</p>
                        </Media.Body>
                    </Media>
                </Well>
            );
        });
    }

    render() {
        return (
            <div>
                <PageHeader>
                    All posts <small>super page</small>
                </PageHeader>
                {this.renderOnePostPreview()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsList);