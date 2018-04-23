import React from 'react'
import { Header, Segment, Icon } from 'semantic-ui-react'

const square1 = { width: 175, height: 175, top: '50%', left: '-20%'}
const square2 = { width: 175, height: 175, top: '50%', left: '0%'}
const square3 = { width: 175, height: 175, top: '50%', left: '20%'}
const arrow = {top: '50%', left: '-10%'}

const SegmentExampleCircular = () => (
  <div>
    <Segment circular style={square1}>
      <Header as='h2'>
        Register
        <Header.Subheader>
          Register for an account
        </Header.Subheader>
      </Header>
    </Segment>
    

    <Segment circular style={square2}>
      <Header as='h2' >
        Decide
        <Header.Subheader>
          Choose what you want to eat
        </Header.Subheader>
      </Header>
    </Segment>

    <Segment circular style={square3}>
      <Header as='h2'>
        Enjoy
        <Header.Subheader>
          Enjoy some home cooked meals!
        </Header.Subheader>
      </Header>
    </Segment>
  </div>
)

export default SegmentExampleCircular
