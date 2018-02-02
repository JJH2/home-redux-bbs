import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';


export default class HeaderMenu extends Component {
  static defaultProps = {
    logoProps: {},
    accountProps: {},
  };

  render() {
    const { logoProps, accountProps } = this.props;
    return (
      <div>
        <Segment clearing>
          <Header {...logoProps} floated="left">
            Hoon Board!
          </Header>
          <Header {...accountProps} floated="right">
            Account!
          </Header>
        </Segment>
      </div>
    );
  }
}
