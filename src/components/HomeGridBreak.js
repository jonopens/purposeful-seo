import React from 'react'
import { Segment, Header, Container, Divider } from 'semantic-ui-react'

const HomeGridBreak = () => {
	return(
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>More Features Are Coming</Header>
        <p style={{ fontSize: '1.33em' }}>
          This is just the beginning for Purposeful SEO. SEOs do a lot more than just look at title tags, 
          and we want to make it easy to do just about everything an SEO might reasonably do. Stay tuned.
        </p>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p>Furthermore...</p>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>Purposeful SEO Is Free</Header>
        <p style={{ fontSize: '1.33em' }}>
          As long as it's out there, Purposeful SEO will be a free tool for "doing SEO".
          Learn and learn to love optimizing, growing and becoming a bigger part of the WWW.
        </p>
      </Container>
    </Segment>
	)
}

export default HomeGridBreak