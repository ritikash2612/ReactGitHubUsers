import React from 'react'
import Proptypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url , user} }) => {

  // const {login , avatar_url, html_url } = this.props.user;
  return (

    <div className="container" style = {{marginTop: '40px'}}>
      <div className="card" style={{ width: '20rem', textAlign: 'center', display: 'inline-block' }}>
        <img src={avatar_url} style={{ width: '5rem' }}></img>
        <div className="card-body">
          <p className="card-text">{login}</p>
          <a href={html_url} className = "btn btn-dark btn-block" >Check Profile</a>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: Proptypes.object.isRequired,
}

export default UserItem
