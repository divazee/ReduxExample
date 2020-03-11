import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: []
         }
    }  
    
    componentDidMount() {
        console.log("object")
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {this.setState({ posts: data }) 
            console.log("object", data)})
    }

    render() {
        const post = this.state.posts.map(post => <ul key={post.id}>
            <li>{post.id}</li>
            <span>{post.title}</span>
        </ul>)
        return (
            <div>
                Posts
                <>
                    {post}
                </>
            </div>
        )
    }
}
 
export default Posts;