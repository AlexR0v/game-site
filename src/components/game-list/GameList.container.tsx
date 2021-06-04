import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react'
import { Filter } from 'types'
import GameList from 'components/game-list/index'
import useFetch from 'utils/hooks/useFetch'

const GameListContainer = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	})

	const { games, error } = useFetch(filter)

	const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({
			...current,
			[event.target.name]: event.target.value,
		}))
		event.preventDefault()
	}, [])

	return <GameList games={games} err={error} onFilterChange={onFilterChange} />
}

export default GameListContainer
