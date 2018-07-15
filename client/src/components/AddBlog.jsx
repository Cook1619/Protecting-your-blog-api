import React, { Component, Fragment } from 'react';
import { setAuthToken } from '../services/base';
import * as blogServices from '../services/blogs';

class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        this.handleBlogTitle = this.handleBlogTitle.bind(this);
        this.handleBlogContent = this.handleBlogContent.bind(this);
        this.addBlog = this.addBlog.bind(this);
    }

    componentDidMount() {
        blogServices.all()
            .then(console.log);
    }

    addBlog() {
        let blogInfo = {
            title: this.state.title,
            content: this.state.content,
        }
        fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blogInfo),
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            })
        }).then(res => res.json())
            .catch(error => console.log(error))
    }


    handleBlogTitle(event) {
        this.setState({
            title: event.target.value
        });
    }
    handleBlogContent(event) {
        this.setState({
            content: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <input
                    type="text"
                    placeholder="Write a Blog Title"
                    onChange={this.handleBlogTitle}
                />
                <input
                    type="text"
                    placeholder="Enter in Blog Content here"
                    onChange={this.handleBlogContent}
                />
                <button
                    onClick={this.addBlog}
                >Post Blog</button>

            </Fragment>
        )
    }
}

export default AddBlog;