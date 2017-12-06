import React from 'react'
import { Segment, Container, Header, Divider } from 'semantic-ui-react'
import LoginModal from './LoginModal.js'
import SignupModal from './SignupModal.js'

const HeadingBlock = (props) => {
	console.log("HeadingBlock props", props)
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
					content="Discover powerful SEO data and track progress."
					inverted
				/>
				<Divider hidden />
				<SignupModal {...props.modalProps.signup}/>
				<LoginModal {...props.modalProps.login}/>
			</Container>
		</Segment>
	)
}

export default HeadingBlock