import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import ClipLoader from 'react-spinners/ClipLoader';

import ContactIcon from '../icons/Contact.js';
import MailIcon from '../icons/Mail.js';
import OutageWarningIcon from '../icons/OutageWarning.js';
import ProfileIcon from '../icons/Profile.js';
import SimpleArrowRightIcon from '../icons/SimpleArrowRight.js';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`http://localhost:3000/api/users/`);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const users = await response.json();
      this.setState({ 
        users, 
        isLoaded: true 
      });
    } catch (error) {
      this.setState({ 
        error, 
        isLoaded: true
      });
    }
  }
  
  render() {
    const { error, isLoaded, users } = this.state;
    
    if (error) {
      return (
        <div className="card error-msg">
          <OutageWarningIcon width="50" height="50" color="#d31a20" />
          <span>Der opstod en fejl!<br/> {error.message}</span>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="loading">
          <ClipLoader
            color="#0c4d33"
            sizeUnit={"px"}
            size={150}
            loading={!this.state.isLoaded} />
        </div>
      );
    } 

    return (
      <div className="body-container">
        <ul className="users"> 
          {
            users.map((user, index) => {
              return ( 
                <li key={user.id.toString()} className="card">
                  <Avatar name={user.name} size="50" round={true} color="#0c4d33" className="avatar"/>
                  <div className="name">{user.name}</div>
                  <div className="company">{user.company.name}</div>
                  <div className="username">
                    <ProfileIcon width="16" height="16" color="#1fab2e" /> 
                    <span>{user.username}</span>
                  </div>
                  <div className="email">
                    <MailIcon width="16" height="16" color="#1fab2e" /> 
                    <span className="text-lowercase">{user.email}</span>
                  </div>
                  <div className="phone">
                    <ContactIcon width="16" height="16" color="#1fab2e" /> 
                    <span>{user.phone}</span>
                    <Link to={`/details/${user.id}`} className="pull-right">
                      <SimpleArrowRightIcon  width="16" height="16" />
                    </Link>
                  </div>
                </li> 
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default UserList;
