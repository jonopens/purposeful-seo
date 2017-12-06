import React from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Divider, Header, Icon, Container, Tab } from 'semantic-ui-react'
import PageLoader from '../components/PageLoader.js'
import TabNgramItemGrid from '../components/TabNgramItemGrid.js'
import TabSEODataTable from '../components/TabSEODataTable.js'
import TabPageItemBody from '../components/TabPageItemBody.js'

import { filterUnigrams, getBigrams } from '../utilities/ngrams.js'

class PageItemContainer extends React.Component {

	render() {

		if(!!this.props.thisPage) {
			const	panes = [
			  { menuItem: 'Essential SEO Data', render: () => 
			  	<TabSEODataTable 
			  		pageData={ this.props.thisPage } 
			  		siteData={ this.props.parentSite } 
		  		/> 
		  	},
			  { menuItem: 'Term Usage Frequency in Document', render: () => 			  	
			  	<TabNgramItemGrid 
						unigrams={ filterUnigrams(this.props.thisPage.body_text).slice(0,12) } 
						bigrams={ getBigrams(this.props.thisPage.body_text).slice(0,12) } 
					/> 
				},
			  { menuItem: 'Captured Page Text', render: () => 
			  	<TabPageItemBody bodyText={this.props.thisPage.body_text} /> 
			  },
			]
			const { thisPage } = this.props

			return(
				<Segment>
				  <Grid padded relaxed style={{ marginTop: '7em' }}>
				  	<Divider hidden />
				  	<Header as="h1" style={{marginTop: '2em'}}>
				  		<Icon name="file text outline" />
				  		{thisPage.title}
				  	</Header>
			  	</Grid>
			  	<Tab style={{ marginTop: '2em' }} menu={{ pointing: true }} panes={panes} />
				  
			  </Segment>
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
	const parentSiteId = +window.location.pathname.split("/")[2]
	const currSite = state.sites.find(site => parentSiteId === site.id)

	return {
		loggedIn: state.loggedIn,
		thisPage: currPage,
		parentSite:  currSite
	}
}

export default connect(mapStateToProps)(PageItemContainer)