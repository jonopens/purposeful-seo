import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'

const HeadingBlock = () => {
	return(
		<Segment inverted color="red">
			<Container textAlign="center">
				<Header 
					as="h1" 
					content="Action-Oriented SEO Insights with Purposeful SEO"
				/>
				<Header 
					as="h2" 
					content="We'll want a special header just for homepage here"
				/>
			</Container>
		</Segment>
	)
}

export default HeadingBlock