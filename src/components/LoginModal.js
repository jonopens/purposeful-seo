import React from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'
import LoginForm from './LoginForm.js'

class LoginModal extends React.Component {

	render() {

		return(
		<Modal 
			trigger={
				<Button inverted color="grey" size="huge" onClick={this.props.handleLoginModalOpen} >Log In</Button>
			}  
			size='small'
			open={this.props.loginModalOpen}
			onClose={this.props.handleLoginModalClose}
			closeIcon
		>
	    <Header icon='plus' content='Log In to Purposeful SEO' />
	    <Modal.Content>
	      <LoginForm handleClose={this.props.handleLoginModalClose} />
	    </Modal.Content>
	  </Modal>
		)
	}
}

export default LoginModal