const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')

// const { Router, Route, hashHistory } = ReactRouter
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = React.createClass({
	assignShow (nextState, replace) {
		const showArray = shows.filter((show) => show.imdbID === nextState.params.id)

		if (showArray.length < 1) {
			return replace('/')
		}

		Object.assign(nextState.params, showArray[0])
		return nextState
	},
	render () {
		return (
			<Provider store={store}>
	 			<Router history={hashHistory}>
	 				<Route path='/' component={Layout}>
	 					<IndexRoute component={Landing} />
						<Route path='/search' component={Search} shows={shows} />
						<Route path='/details/:id' component={Details} onEnter={this.assignShow} />
					</Route>
	 			</Router>
	 		</Provider>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'))