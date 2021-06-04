import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'pages/home'
import GlobalStyles from 'ui/global-styles'

const App = (): ReactElement => {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
