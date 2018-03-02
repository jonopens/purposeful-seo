import React from 'react'
import { connect } from 'react-redux'
import { Grid, Divider, Header, Icon, Segment } from 'semantic-ui-react'
import InsightsTable from '../components/InsightsTable.js'

class InsightsContainer extends React.Component {

	render(){
		return(
			<Segment>
			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<Divider hidden />
			  	<Header as="h1" style={{marginTop: '2em'}}>
			  		<Icon name="idea" />
			  		Insights
			  	</Header>
			    <Grid.Row>
			      <InsightsTable insights={this.props.insights} />
			    </Grid.Row>
			  </Grid>
		  </Segment>
		)
	}
}

function mapStateToProps(state) {
	return {
		insights: state.insights
	}
}

export default connect(mapStateToProps)(InsightsContainer)
