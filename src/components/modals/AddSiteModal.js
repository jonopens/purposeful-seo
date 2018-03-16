import React from 'react'
import { Modal, Header, Icon, Button } from 'semantic-ui-react'
import AddSiteForm from '../forms/AddSiteForm.js'

class AddSiteModal extends React.Component {

	render() {
		return(
		<Modal
			trigger={
				<Button color="blue" onClick={ this.props.handleModalOpen }>
					<Icon name="plus" size="large"/>Add a Site
				</Button>
			}
			size='small'
			open={ this.props.modalOpen }
			onClose={ this.props.handleModalClose }
			closeIcon
		>
	    <Header icon='plus' content='Add a New Site' />
	    <Modal.Content>
	      <AddSiteForm handleClose={ this.props.handleModalClose }/>
	    </Modal.Content>
	  </Modal>
		)
	}
}

export default AddSiteModal
