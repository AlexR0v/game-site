import React, { ChangeEvent, ReactElement } from 'react'
import { Game } from 'types'
import GameCard from 'components/game-card'
import { List, ListItem } from './styles'
import GameFilter from 'components/game-filter'

interface Props {
	err?: string
	games: Game[]
	onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
	if (err) {
		return <h3>Unable to fetch games</h3>
	}
	if (games.length <= 0) {
		return <h3>No games available</h3>
	}
	return (
		<>
			<GameFilter onChange={onFilterChange} />
			<List>
				{games.map(game => (
					<ListItem key={game.id}>
						<GameCard content={game} />
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GameList
