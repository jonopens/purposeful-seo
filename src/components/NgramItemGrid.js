import React from 'react'
import NgramList from './NgramList.js'
import { Grid } from 'semantic-ui-react'

const NgramItemGrid = (props) => {
	console.log("NgramItemGrid", props)
	return(
		
  	<Grid.Row>
  		<Grid.Column width={4} />
  		<NgramList ngrams={props.unigrams} text="Unigrams" />
  		<NgramList ngrams={props.bigrams} text="Bigrams" />
  		<Grid.Column width={2} />
  	</Grid.Row>
	)
}

export default NgramItemGrid