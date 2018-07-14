import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class SingleBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }
    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/blogs/' + this.props.match.params.id);
            let data = await res.json();
            console.log(data);
            this.setState({
                blog: data
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        console.log(this.state.blog)
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-body">{this.state.blog.title}
                            <p>{this.state.blog.content}</p>
                            <p>{this.state.blog._created}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBlog;