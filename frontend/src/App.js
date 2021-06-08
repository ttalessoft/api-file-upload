import React, { Component } from 'react';

import GlobalStyles from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Content>
            <Upload />
          </Content>
        </Container>
        <GlobalStyles />
      </>
    )

  }
}

export default App;
