import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

class AboutPage extends React.Component {
	render() {
		return(
			<Segment>
				<Grid style={{ padding: '8em 0em' }}>
					<Grid.Row>
						<Grid.Column width={ 16 }>
							<Header as='h1' style={{ fontSize: '2em' }}>Purposeful SEO is about making you productive.</Header>
							<p>There are too many shows. Stop watching them. Do SEO.</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		)
	}
}

export default AboutPage;
