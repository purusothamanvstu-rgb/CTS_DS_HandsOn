import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        // Initialize the state with an empty list of posts
        this.state = {
            posts: []
        };
    }

    // Custom method to fetch data using the Fetch API
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }

    // Lifecycle hook: triggers automatically after mounting to the DOM
    componentDidMount() {
        this.loadPosts();
    }

    // Lifecycle hook: catches rendering errors inside the component tree
    componentDidCatch(error, info) {
        alert("An error occurred in the component: " + error.message);
    }

    render() {
        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1 style={{ textAlign: 'center' }}>Blog Posts</h1>
                <hr />
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ margin: '20px 0', borderBottom: '1px solid #ccc', paddingBottom: '15px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;