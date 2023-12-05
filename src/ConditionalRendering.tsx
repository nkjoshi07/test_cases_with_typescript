import { Button, Typography } from '@mui/material';
import React, { Component } from 'react';

interface stateType {
  role: string;
}
export default class ConditionalRendering extends Component<any, stateType> {
  constructor(props: any) {
    super(props)
    this.state = {
      role: "admin"
    }
  }
  changeRole = () => {
    this.setState({ role: this.state.role === "admin" ? "employee" : "admin" })
  }
  render() {
    return (
      <>
        {this.state.role === "admin" ?
          <Typography>Hi I'M Admin</Typography>
          :
          <Typography>Hi I'M Employee</Typography>
        }
        <Button id='button' onClick={() => this.changeRole()}>
          Change Role
        </Button>
      </>
    );
  }
}
