import React from 'react'
import { Segment, Container, Header, Divider } from 'semantic-ui-react'
import LoginModal from './modals/LoginModal.js'
import SignupModal from './modals/SignupModal.js'

const HeadingBlock = (props) => {
	return(
		<Segment inverted vertical color="black" style={{ minHeight: 400, padding: '1em 0em' }}>
			<Container textAlign="center">
				<Header
					as="h1"
					content="Purposeful SEO: Action-Oriented SEO Insights"
					inverted
					style={{ margin: '3em 0em 1em', fontSize: '3.5em' }}
				/>
				<Divider hidden />
				<SignupModal { ...props.modalProps.signup }/>
				<LoginModal { ...props.modalProps.login }/>
			</Container>
		</Segment>
	)
}

export default HeadingBlock
