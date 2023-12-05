import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from "yup"
import ConditionalRendering from './ConditionalRendering';


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
      initialvalues: {
        email: "",
        password: ""
      }
    }
  }

  handleClick = (values: any) => {
    console.log("values", values)
    this.setState({ loginData: [...this.state.loginData, values], initialvalues: values })
  }

  render() {
    return (
      <>
        <Formik
          initialValues={{
            email: this.state.initialvalues.email || "",
            password: this.state.initialvalues.password || ""
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email("please enter valid email").required("please enter email"),
            password: yup.string().required("please enter password")
          })}
          data-testid="formikTest"
          onSubmit={this.handleClick}>
          <Form>
            <Stack justifyContent="center" alignItems="center" direction="column">
              <Typography sx={{ textAlign: "center" }}>Login form</Typography>
              <Stack justifyContent="center" alignItems="center" sx={{ my: 3 }} direction="row">
                <label htmlFor='email' id='email-label'>
                  Email:
                </label>
                <Field name='email' id="input-email" type='email' />
                <ErrorMessage name='email' id='email-error' component="div" />
              </Stack>
              <Stack justifyContent="center" alignItems="center" sx={{ my: 3 }} direction="row">
                <label htmlFor='password' id='password-label'>
                  password:
                </label>
                <Field name='password' id="input-password" type='password' />
                <ErrorMessage name='password' id='password-error' component="div" />
              </Stack>
              <Button id='submit' type='submit' variant="contained" color="primary">
                Save
              </Button>
            </Stack>
          </Form>
        </Formik>
        <ConditionalRendering />
      </>
    );
  }
}

export default App;
