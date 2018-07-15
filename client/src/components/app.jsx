import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import BlogList from './BlogList';
import SingleBlog from './SingleBlog';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav>
                        <Link to="/goodbye">Goodbye</Link>
                        <Link to="/blogs">Blogs</Link>
                    </nav>
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                        <PrivateRoute path="/blogs" component={BlogList} />
                        <Route path="/:id" component={SingleBlog} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;