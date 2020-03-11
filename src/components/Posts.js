import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const post = this.props.posts.map(post => (
      <ul key={post.id}>
        <li>{post.id}</li>
        <span>{post.title}</span>
      </ul>
    ));
    return (
      <div>
        Posts
        <>{post}</>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
