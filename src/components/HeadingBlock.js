import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'

const HeadingBlock = () => {
	return(
		<Segment inverted vertical color="black" style={{minHeight: 400, padding: '1em 0em'}}>
			<Container textAlign="center">
				<Header 
					as="h1" 
					content="Action-Oriented SEO Insights with Purposeful SEO"
					inverted
					style={{marginTop: '3em'}}
				/>
				<Header 
					as="h2" 
					content="We'll want a special header just for homepage here"
					inverted
				/>
			</Container>
		</Segment>
	)
}

export default HeadingBlock