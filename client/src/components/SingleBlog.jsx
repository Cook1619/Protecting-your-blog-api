import React, { Component, Fragment } from 'react';
import * as blogServices from '../services/blogs'
import { render } from 'react-dom';


class SingleBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }
    }
    
    async componentDidMount() {
        let id = this.props.match.params.id;
        try {
            let res = await fetch('/api/blogs/' + id);
            let data = await res.json();
            console.log(data.id);
            this.setState({
                blog: data
            })
        } catch (e) {
            console.log(e);
        }
    }
    async deleteBlog(){
        try {
            let id = this.props.match.params.id
            console.log(id);
            await blogServices.destroy(id)
        } catch (err) {
            console.log('This is the' + err);
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-body">{this.state.blog.title}
                            <p>{this.state.blog.content}</p>
                            <p>{this.state.blog._created}</p>
                            <button className="btn btn-info float-right m-2" onClick={this.deleteBlog.bind(this)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBlog;