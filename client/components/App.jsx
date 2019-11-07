import React from 'react';
import Avatar from 'react-avatar';

import ContactIcon from '../icons/Contact.js';
import MailIcon from '../icons/Mail.js';
import ProfileIcon from '../icons/Profile.js';
import ArrowRightIcon from '../icons/SimpleArrowRight.js';

// import { css } from '@emotion/core';

// import { ClipLoader } from 'react-spinners';
// import ClipLoader from 'react-spinners/ClipLoader';

// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: #1fab2e;
// `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/users/") 
      .then(res => res.json())
      .then(
        (users) => {
          this.setState({
            isLoaded: true,
            users: users
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }
  
  render() {
    const { error, isLoaded, users } = this.state;
    console.log('users: ', users);
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Indlæser...</div>;
    } 
    
    return (
      <ul> 
        {
          users.map((user, index) => {
            return ( 
              <li key={user.id.toString()}>
                <Avatar name={user.name} size="50" round={true} color="#0c4d33" className="avatar"/>
                <div className="name">{user.name}</div>
                <div className="company">{user.company.name}</div>
                <div className="username">
                  <ProfileIcon width="16" height="16" color="#1fab2e" /> 
                  <span>{user.username}</span>
                  </div>
                <div className="email">
                  <MailIcon width="16" height="16" color="#1fab2e" /> 
                  <span>{user.email}</span>
                </div>
                <div className="phone">
                  <ContactIcon width="16" height="16" color="#1fab2e" /> 
                  <span>{user.phone}</span>
                  <ArrowRightIcon className="pull-right" width="16" height="16" />
                </div>
              </li> 
            )
          })
        }
      </ul>
    );
  }
}

export default App;
