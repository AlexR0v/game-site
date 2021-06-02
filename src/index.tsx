import React from 'react'
import { render } from 'react-dom'
import { AppStyle } from './app.styles'

const App = () => {
	return <AppStyle>Hello</AppStyle>
}

render(<App />, document.getElementById('root'))
