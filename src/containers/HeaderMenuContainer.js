import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from '../components/HeaderMenu';

const logoProps = {
  as: Link,
  to: '/list',
};
const accountProps = {
  as: Link,
  to: '/account',
};

export default class HeaderMenuContainer extends Component {
  render() {
    return (
      <HeaderMenu logoProps={logoProps} accountProps={accountProps} />
    );
  }
}
