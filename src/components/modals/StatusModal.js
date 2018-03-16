import React from 'react'
import { Modal, Header } from 'semantic-ui-react'

class StatusModal extends React.Component {
	state = {

	}

	render() {
		return(
			<Modal
				size='small'
				open={ this.props.statusModalOpen }
				positive={ this.props.isPositive ? "true" : "false" }
				negative={ this.props.isPositive ? "false" : "true" }
			>
		    <Header icon='check' content={ this.props.msg } />
		    <Modal.Content>
		      { this.props.msg }
		    </Modal.Content>
		  </Modal>
		)
	}
}

export default StatusModal
