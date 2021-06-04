import React from 'react'
import { ReactElement } from 'react'
import GameListContainer from 'components/game-list/GameList.container'
import { withErrorBoundary } from 'utils'

const Home = (): ReactElement => {
	return <GameListContainer />
}

export default withErrorBoundary(Home)
