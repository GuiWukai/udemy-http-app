import React, { Component } from 'react';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {
	state = {
		auth: true,
	};
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								{/* <NavLink
									to="/"
									exact
									activeClassName="my-active"
									activeStyling={{ color: 'green' }}
								/> */}
								<NavLink to="/" exact>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/new-post">New post</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					{this.state.auth ? (
						<Route
							path="/new-post"
							exact
							component={AsyncNewPost}
						/>
					) : null}
					<Route path="/posts" exact component={Posts} />
					<Route path="/posts/:id" component={FullPost} />
					<Redirect from="/" to="/posts" />
				</Switch>
			</div>
		);
	}
}

export default Blog;
