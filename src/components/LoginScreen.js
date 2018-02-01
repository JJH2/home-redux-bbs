import React, { Component } from 'react';
import { Grid, Button, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const LoginScreenWrap = styled.div`
  background-color: #fffaef;
`;

const LoginBTN = styled.h1`
  font-size: 1.2em;
  font-weight: bold;
`;

export default class LoginScreen extends Component {
  static = {
    onGoogleLogin: () => {},
  }
  render() {
    return (
      <LoginScreenWrap>
        <Grid style={{ height: '100vh' }} columns={3} verticalAlign="middle" centered>
          <Grid.Column>
            <Segment style={{ width: '300px', padding: '50px' }} raised textAlign="center">
              <LoginBTN>로그인하기!</LoginBTN>
              <Button style={{ marginTop: '30px' }} color="facebook" fluid>
                <Icon name="facebook" /> Facebook
              </Button>
              <Button style={{ marginTop: '10px' }} color="google plus" fluid onClick={this.props.onGoogleLogin}>
                <Icon name="google plus" /> Google Plus
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </LoginScreenWrap>
    );
  }
}
