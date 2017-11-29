import React from 'react'
import { Grid, Divider, Header, Icon } from 'semantic-ui-react'
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

	handlePageModalOpen = () => {
		this.setState({
			pageModalOpen: true
		})
	}

	handlePageModalClose = () => {
		this.setState({
			pageModalOpen: false
		})
	}

	render(){
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">
		  		<Icon name="sitemap" />
		  		Pages
		  	</Header>
		  	<Grid.Row>
		  		<Grid.Column>
			  		<AddPageModal
			  			handlePageModalOpen={this.handlePageModalClose}
			  			handlePageModalOpen={this.handlePageModalOpen}
			  			pageModalOpen={this.state.modalOpen}
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