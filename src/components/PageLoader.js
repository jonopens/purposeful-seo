import React from 'react'
import { Dimmer, Divider, Loader, Image, Segment } from 'semantic-ui-react'

const PageLoader = () => (
  <Segment inverted textAlign='center' style={{minHeight: '400px', marginTop: '7em'}} >
  	<Divider hidden />
    <Dimmer active>
      <Loader inline indeterminate inverted content='Loading' size="massive" />
    </Dimmer>

    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default PageLoader;