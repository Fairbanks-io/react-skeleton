import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Index from './views/index'
import SignIn from './views/SignIn'
import Register from './views/Register'
import Admin from './views/Admin'
import Dashboard from './views/Dashboard'

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		height: '100%',
	},
})

class Skeleton extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<Router>
				<div className={classes.root}>
					<Switch>
						<Route exact path="/" render={routeProps => <Index {...routeProps} />} />
						<Route
							exact
							path="/register"
							render={routeProps => <Register {...routeProps} />}
						/>
						<Route
							exact
							path="/admin"
							render={routeProps => <Admin {...routeProps} />}
						/>
						<Route
							exact
							path="/signin"
							render={routeProps => <SignIn {...routeProps} />}
						/>
						<Route
							exact
							path="/dashboard"
							render={routeProps => <Dashboard {...routeProps} />}
						/>
					</Switch>
				</div>
			</Router>
		)
	}
}

Skeleton.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skeleton)
