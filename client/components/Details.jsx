import React from 'react';
import Avatar from 'react-avatar';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';

import ArrowLeftIcon from '../icons/ArrowLeft.js';
import ContactIcon from '../icons/Contact.js';
import LocationIcon from '../icons/Location.js';
import MailIcon from '../icons/Mail.js';
import ProfileIcon from '../icons/Profile.js';
import OutageWarningIcon from '../icons/OutageWarning.js';
import HomeIcon from '../icons/Home.js';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: null
    };
  }

  async componentDidMount() {
    try {
      const { params: { id } } = this.props.match;
      const response = await fetch(`http://localhost:3000/api/user/${id}`);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const user = await response.json();
      this.setState({ 
        user, 
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
    const { error, isLoaded, user } = this.state;

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
      <div className="outer">
        <div className="inner">
          <div className="details">
            <div className="avatar">
              <Avatar name={user.name} size="100" round={true} color="#0c4d33" />
            </div>
            
            <div className="name">{user.name}</div>
            <div className="company">{user.company.name}</div>
            <div className="catch-phrase">{user.company.catchPhrase}</div>

            <div className="user-info card">
              <ProfileIcon className="icon-username" width="50" height="50" color="#1fab2e" /> 
              <label className="label-username">Brugernavn</label>
              <div className="username">{user.username}</div>

              <LocationIcon className="icon-location" width="50" height="50" color="#1fab2e" />
              <label className="label-street">Adresse</label>
              <div className="street">{user.address.street} {user.address.suite}</div>
              <label className="label-zipcode">Postnr.</label>
              <div className="zipcode">{user.address.zipcode}</div>
              <label className="label-city">By</label>
              <div className="city">{user.address.city}</div>
            </div>

            <div className="user-contact card">            
              <MailIcon className="icon-email" width="50" height="50" color="#1fab2e" /> 
              <label className="label-email">Email</label>
              <div className="email text-lowercase">{user.email}</div>
              
              <ContactIcon className="icon-phone" width="50" height="50" color="#1fab2e" /> 
              <label className="label-phone">Telefonnummer</label>
              <div className="phone">{user.phone}</div>

              <HomeIcon className="icon-website" width="50" height="50" color="#1fab2e" /> 
              <label className="label-website">Hjemmeside</label>
              <div className="website">
                <a href={'http://' + user.website} target="_blank">{user.website}</a>
              </div>
            </div>

            <Link to="/" className="back-button"><ArrowLeftIcon width="50" height="50" /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Details
