import React from 'react'
import { connect } from 'react-redux'
import { Grid, Divider, Header, Icon, Container, Segment } from 'semantic-ui-react'
import PageLoader from '../components/PageLoader.js'
import PageTable from '../components/tables/PageTable.js'
import AddPageModal from '../components/modals/AddPageModal.js'

class PagesContainer extends React.Component {

	constructor(){
		super()

		this.state = {
			pageModalOpen: false
		}
	}

	handlePageAddModalOpen = () => {
		this.setState({
			pageModalOpen: true
		})
	}

	handlePageAddModalClose = () => {
		this.setState({
			pageModalOpen: false
		})
	}

	render(){
		if(!!this.props.loggedIn){
			return(
				<Segment>
				  <Grid padded relaxed style={{ marginTop: '7em' }}>
				  	<Divider hidden />
				  	<Header as="h1" style={{ marginTop: '2em' }}>
				  		<Icon name="sitemap" />
				  		Pages: { this.props.thisSite.domain_name }
				  	</Header>
				  	<Grid.Row>
				  		<Grid.Column>
					  		<AddPageModal
					  			handlePageAddModalClose={ this.handlePageAddModalClose }
					  			handlePageAddModalOpen={ this.handlePageAddModalOpen }
					  			pageModalOpen={ this.state.pageModalOpen }
					  			site={ this.props.thisSite }
					  		/>
				  		</Grid.Column>
				  	</Grid.Row>
				  	<Grid.Row>
			      	<PageTable
			      		pages={ this.props.thisSitePages }
			      		removePage={ this.props.removePage }
			      		siteId={ window.location.pathname.split("/")[2] }
		      		/>
				    </Grid.Row>
				  </Grid>
			  </Segment>
			)
		} else {
			return(
				<Container>
					<PageLoader />
				</Container>
			)
		}
	}
}

function mapStateToProps(state) {
	const currPath = +window.location.pathname.split("/")[2]
	return {
		loggedIn: state.loggedIn,
		thisSitePages: state.pages.filter(page => page.site_id === currPath),
		thisSite: state.sites.find(site => site.id === currPath)
	}
}

export default connect(mapStateToProps)(PagesContainer);
