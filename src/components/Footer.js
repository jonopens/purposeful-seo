import React from 'react'
import {
	Grid, Header, List, Container, Divider, Image, Segment
} from 'semantic-ui-react'
import NauticalStar from '../assets/nautical-star.png'

export default class Footer extends React.Component {

	render() {
		return(
			<Segment
	      inverted
	      vertical
	      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    	>
	      <Container textAlign='center'>
	        <Grid divided inverted stackable>
	          <Grid.Row>
	            <Grid.Column width={ 3 }>
	              <Header inverted as='h4' content='These' />
	              <List link inverted>
	                <List.Item as='a'>There</List.Item>
	                <List.Item as='a'>Will</List.Item>
	                <List.Item as='a'>Be</List.Item>
	                <List.Item as='a'>Content</List.Item>
	              </List>
	            </Grid.Column>
	            <Grid.Column width={ 3 }>
	              <Header inverted as='h4' content="Aren't" />
	              <List link inverted>
	                <List.Item as='a'>There's</List.Item>
	                <List.Item as='a'>Something</List.Item>
	                <List.Item as='a'>About</List.Item>
	                <List.Item as='a'>Flatiron</List.Item>
	              </List>
	            </Grid.Column>
	            <Grid.Column width={3}>
	              <Header inverted as='h4' content='Links' />
	              <List link inverted>
	                <List.Item as='a'>Fetchin'</List.Item>
	                <List.Item as='a'>In</List.Item>
	                <List.Item as='a'>The</List.Item>
	                <List.Item as='a'>Rain</List.Item>
	              </List>
	            </Grid.Column>
	            <Grid.Column width={ 7 }>
	              <Header inverted as='h2' content="This May or May Not Be Read" />
	              <p>HUGE love goes out to my Flatiron cohortmates, my instructors and my wife, Jaime.</p>
	              <p>Separately, and for the record, Mariah Carey's 'All I Want For Christmas' is <span role="img" aria-label="fire">&#128293;</span>.</p>
	              <p>Made with &#9829; by <a href="https://github.com/jonopens">Jon Openshaw</a></p>
	            </Grid.Column>
	          </Grid.Row>
	        </Grid>

	        <Divider inverted section />
	        <Image
	          centered
	          size='mini'
	          src={NauticalStar}
	        />
	        <List horizontal inverted divided link>
	          <List.Item as='a' href='#'>Site Map</List.Item>
	          <List.Item as='a' href='#'>Contact Us</List.Item>
	          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
	          <List.Item as='a' href='#'>Privacy Policy</List.Item>
	        </List>
	      </Container>
      </Segment>
		)
	}
}
