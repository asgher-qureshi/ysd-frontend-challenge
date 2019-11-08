import React from 'react';
import Avatar from 'react-avatar';
import ClipLoader from 'react-spinners/ClipLoader';

import ContactIcon from '../icons/Contact.js';
import LocationIcon from '../icons/Location.js';
import MailIcon from '../icons/Mail.js';
import ProfileIcon from '../icons/Profile.js';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: null
    };
  }

  componentDidMount() {
    console.log(this.props.match);
    const { params: { id } } = this.props.match;
    console.log('id: ', id);

    fetch(`http://localhost:3000/api/user/${id}`)
      .then(res => res.json())
      .then(
        (user) => {
          this.setState({
            isLoaded: true,
            user
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
    const { error, isLoaded, user } = this.state;
    console.log('user: ', user);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="loading">
          <ClipLoader
            color="#0c4d33"
            sizeUnit={"px"}
            size={150}
            loading={this.state.loading} />
        </div>
      );
    } 


    return (
      <div className="body-container">
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
            
            <MailIcon className="icon-email" width="50" height="50" color="#1fab2e" /> 
            <label className="label-email">Email</label>
            <div className="email text-lowercase">{user.email}</div>
            
            <ContactIcon className="icon-phone" width="50" height="50" color="#1fab2e" /> 
            <label className="label-phone">Telefonnummer</label>
            <div className="phone">{user.phone}</div>
          </div>

          <div className="user-address card">
            <LocationIcon className="icon-location" width="50" height="50" color="#1fab2e" />
            <label className="label-street">Adresse</label>
            <div className="street">{user.address.street} {user.address.suite}</div>
            <label className="label-zipcode">Postnr.</label>
            <div className="zipcode">{user.address.zipcode}</div>
            <label className="label-city">By</label>
            <div className="city">{user.address.city}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details
