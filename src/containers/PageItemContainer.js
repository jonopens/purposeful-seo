import React from 'react'
import { connect } from 'react-redux'
import Compromise from 'compromise'
import { Grid, Divider, Header, Icon, Container } from 'semantic-ui-react'
import PageLoader from '../components/PageLoader.js'
import NgramItemGrid from '../components/NgramItemGrid.js'

import { filterUnigrams, getBigrams } from '../utilities/ngrams.js'

class PageItemContainer extends React.Component {

	// getUnigrams = () => {
	// 	let stopwords = stopWords()
	// 	let unigrams = Compromise(this.props.thisPage.body_text).normalize().ngrams().unigrams().data()
	// 	return unigrams.filter(
	// 		gram => (stopwords.every(
	// 			word => {
	// 				return !(gram.normal === word)
	// 			})
	// 		)
	// 	)
	// }

	render() {

		if(!!this.props.thisPage) {
			console.log(this.props.thisPage)
			const { thisPage } = this.props
			return(
			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<Divider hidden />
			  	<Header as="h1">
			  		<Icon name="file text outline" />
			  		{thisPage.title}
			  	</Header>
			  	<Grid.Row>
			  		<Grid.Column>
			  			<Header as="h2" content="Frequently Used Terms" />
			  		</Grid.Column>
			  	</Grid.Row>
			  	<NgramItemGrid 
			  		unigrams={ filterUnigrams(thisPage.body_text).slice(0,12) } 
			  		bigrams={ getBigrams(thisPage.body_text).slice(0,12) } 
		  		/>
			  	<Grid.Row>
		      	<Grid.Column>
			  			<Container>
			  				<p>{thisPage.body_text}</p>
			  			</Container>
			  		</Grid.Column>
			    </Grid.Row>
			  </Grid>
			)
		} else {
			return(
				<Container style={{ marginTop: '7em' }}>
					<PageLoader />
				</Container>
			)
		}
	}
}

function mapStateToProps(state) {
	const currPageId = +window.location.pathname.split("/")[4]
	const currPage = state.pages.find(page => currPageId === page.id)
	return {
		loggedIn: state.loggedIn,
		thisPage: currPage
	}
}

export default connect(mapStateToProps)(PageItemContainer)