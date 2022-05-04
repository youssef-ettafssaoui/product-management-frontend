import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import UserService from '../services/user.service';

class AuthGuard extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    const {component: Component, roles} = this.props;
    const currentUser = UserService.currentUserValue;
    if(!currentUser){
      return (<Navigate to={{pathname: '/login'}}/>);
    }

    if(roles && roles.indexOf(currentUser.role) === -1){
      return (<Navigate to={{pathname: '/401'}}/>);
    }

    return (<Component/>);
  }

}

export default AuthGuard;
