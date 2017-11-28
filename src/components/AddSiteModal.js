import React from 'react'
import { Modal, Header, Icon, Button } from 'semantic-ui-react'

class AddSiteModal extends React.Component {
	render() {
		return(
		<Modal 
			trigger={
				<Button color="blue">
					<Icon name="plus" size="large"/>Add a Site 
				</Button>
			}  
			size='small'
		>
	    <Header icon='plus' content='Add a New Site' />
	    <Modal.Content>
	      <p>	</p>
	    </Modal.Content>
	    <Modal.Actions>
	      <Button color='red' inverted>
	        <Icon name='remove' /> No
	      </Button>
	      <Button color='green' inverted>
	        <Icon name='checkmark' /> Yes
	      </Button>
	    </Modal.Actions>
	  </Modal>
		)
	}
}

export default AddSiteModal