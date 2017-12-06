import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const NgramList = (props) => {

	let ngramListItems = props.ngrams.map(
		(ngram, idx) => {
			return (
				<li key={idx} style={{fontSize: "18px", lineHeight: "1.5em"}}>
					{ngram.normal}: <strong>{ngram.count}</strong>
				</li>
			)
		}
	) 

	return(
		<Grid.Column width={6} style={{textAlign: 'left'}}>
			<Header as="h3" content={props.text} />
			<ul>
				{ ngramListItems }
			</ul>
		</Grid.Column>
	)
}

export default NgramList