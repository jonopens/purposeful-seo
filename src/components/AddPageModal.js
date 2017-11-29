import React from 'react'
import { Modal, Header, Icon, Button } from 'semantic-ui-react'
import AddSiteForm from './AddSiteForm.js'

class AddPageModal extends React.Component {

	render() {
		console.log(this.props)
		return(
		<Modal 
			trigger={
				<Button color="blue" onClick={this.props.handlePageModalOpen}>
					<Icon name="plus" size="large"/>Add a New Page 
				</Button>
			}  
			size='small'
			open={this.props.pageModalOpen}
			
		>
	    <Header icon='plus' content='Add a New Page' />
	    <Modal.Content>
	      <AddSiteForm handleClose={this.props.handlePageModalClose}/>
	    </Modal.Content>
	  </Modal>
		)
	}
}

export default AddPageModal