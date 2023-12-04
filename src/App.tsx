import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from "yup"

const initialValues = {
  email: "",
  password: ""
}
interface iState {
  isOpen: boolean;
  loginData: any[];
  initialvalues: {
    email: string;
    password: string;
  }
}

class App extends React.Component<any, iState> {
  constructor(props: any) {
    super(props)
    this.state = {
      isOpen: false,
      loginData: [],
      initialvalues: initialValues
    }
  }
  handleClick = () => {
    const tempData = { email: this.state.initialvalues.email, password: this.state.initialvalues.password }
    this.setState({ loginData: [...this.state.loginData, tempData] })
    // return tempData
  }
  render() {
    const loginSchema = yup.object({
      email: yup.string().email("please enter valid email").required("please enter email"),
      password: yup.string().required("please enter password")
    })
    // console.log("state", this.state)
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        data-testid="formikTest"
        onSubmit={this.handleClick}>
        <Form>
          <Stack justifyContent="center" alignItems="center" direction="column">
            <Typography sx={{ textAlign: "center" }}>Login form</Typography>
            <Stack justifyContent="center" alignItems="center" sx={{ my: 3 }} direction="row">
              <label htmlFor='email'>
                Email:
              </label>
              <input name='email' value={this.state.initialvalues.email} onChange={(e) => this.setState({
                initialvalues: {
                  ...this.state.initialvalues, email: e.target.value
                }
              })} id="input-email" type='email' />
              <ErrorMessage name='email' id='email-error' />
            </Stack>
            <Stack justifyContent="center" alignItems="center" sx={{ my: 3 }} direction="row">
              <label htmlFor='password' id='password-error'>
                password:
              </label>
              <input name='password' value={this.state.initialvalues.password} onChange={(e) => this.setState({
                initialvalues: {
                  ...this.state.initialvalues, password: e.target.value
                }
              })} id="input-password" type='password' />
              <ErrorMessage name='password' />
            </Stack>
            <Button id='submit' type='submit' variant="contained" color="primary">
              Save
            </Button>
          </Stack>
        </Form>
      </Formik>

    );
  }
}

export default App;
