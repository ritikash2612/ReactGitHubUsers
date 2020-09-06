import React, { Component } from 'react'
import UserItem from './UserItem';
import Spinner from './Spinner'
// import Proptypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading){
    return <Spinner/>
  }
  else {
    return (

      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }

}


// UserItem.propTypes = {
//   users: Proptypes.object.isRequired,
// }

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}


export default Users
