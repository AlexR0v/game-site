import React, { ReactElement } from 'react'
import { Game } from 'types'
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'
import { BROWSER, WINDOWS } from './constants'
import {
	StyledLink,
	Img,
	Description,
	Details,
	Genre,
	Icon,
	Title,
} from './styles'

interface Props {
	content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
	const { id, title, thumbnail, short_description, genre, platform } = content
	const link = `/game/${id}`

	const icons = platform.split(',').map(p => {
		let icon = null
		switch (p.trim()) {
			case BROWSER:
				icon = (
					<Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} />
				)
				break
			case WINDOWS:
				icon = (
					<Icon key={`${id}-windows`} alt="windows icon" src={windowsIcon} />
				)
				break
			default:
				break
		}
		return icon
	})

	return (
		<StyledLink to={link}>
			<Img src={thumbnail} alt={`${title}-logo`} />
			<Details>
				<Title>{title}</Title>
				<Description>{short_description}</Description>
				<Genre>{genre}</Genre>
				{icons}
			</Details>
		</StyledLink>
	)
}

export default GameCard
