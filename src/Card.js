import React, {Component} from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
	padding: 20px;
	border: 1px solid rgba(1, 1, 1, 0.1);
	border-radius: 10px;
	margin-bottom: 20px;
	width: 600px;
`

const PosterPic = styled.img`
	width: 50px;
	height: 50px;
`

class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false
		}
	}

	render() {
		const { posterUsername, posterName, posterPicUrl, dateString, likes, shares, body } = this.props

		// TODO: style the card using styled-components and CSS
		// TODO: implement a show/hide button that toggles card expansion (using state)

		return (
			<CardWrapper>
				<PosterPic src={posterPicUrl}/>
				{posterName} {posterUsername} 
				{body} 
				{likes} {shares}
			</CardWrapper>
		)
	}
}

export default Card