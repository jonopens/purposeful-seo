import React from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'
import SignupForm from '../forms/SignupForm.js'

class SignupModal extends React.Component {

	render() {
		return(
		<Modal
			trigger={
				<Button onClick={ this.props.handleSignupModalOpen } size="huge">Sign Up</Button>
			}
			size='small'
			open={ this.props.signupModalOpen }
			onClose={ this.props.handleSignupModalClose }
			closeIcon
		>
	    <Header icon='plus' content='Sign Up for a New Account' />
	    <Modal.Content>
	      <SignupForm handleClose={ this.props.handleSignupModalClose } />
	    </Modal.Content>
	  </Modal>
		)
	}
}

export default SignupModal
