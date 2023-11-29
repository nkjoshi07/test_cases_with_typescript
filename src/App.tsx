import React from 'react';
import './App.css';
// import { Button } from '@material-ui/core';

interface iState{
  isOpen: boolean;
}

class App extends React.Component<any, iState> {
  constructor(props: any) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {

  }
  render() {

    return (
      <div className="App">
        {/* <Button variant="contained" color="primary">
          Primary
        </Button> */}
      </div>
    );
  }
}

export default App;
