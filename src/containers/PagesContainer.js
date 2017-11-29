import React from 'react'
import { Grid, Divider, Header, Icon } from 'semantic-ui-react'
import PageLoader from '../components/Loader.js'
import { connect } from 'react-redux'
import PageTable from '../components/PageTable.js'
import AddPageModal from '../components/AddPageModal.js'

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

		if(!!this.props.thisSite){
			return(

			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<Divider hidden />
			  	<Header as="h1">
			  		<Icon name="sitemap" />
			  		Pages: {this.props.thisSite.domain_name}
			  	</Header>
			  	<Grid.Row>
			  		<Grid.Column>
				  		<AddPageModal
				  			handlePageAddModalClose={this.handlePageAddModalClose}
				  			handlePageAddModalOpen={this.handlePageAddModalOpen}
				  			pageModalOpen={this.state.pageModalOpen}
				  			site={this.props.thisSite}
				  		/>
			  		</Grid.Column>
			  	</Grid.Row>
			  	<Grid.Row>
		      	<PageTable 
		      		pages={this.props.currPages} 
		      		removePage={this.props.removePage}
		      		siteId={window.location.pathname.split("/")[2]}
	      		/>
			    </Grid.Row>
			  </Grid>

			)
		} else {
			return(
				<PageLoader />
			)
		}
	}
}

function mapStateToProps(state) {
	const currPath = +window.location.pathname.split("/")[2]
	return {
		currPages: state.pages.filter(page => page.site_id === currPath),
		thisSite: state.sites.find(site => site.id === currPath)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		removePage: 'hi',

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesContainer);