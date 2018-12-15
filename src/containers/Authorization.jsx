import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #afdffc;
`;

class App extends React.Component {
  render() {
    return (
      <Background>
        <h1>Астрал.ОФД</h1>
      </Background>
    );
  }
}

export default App;
