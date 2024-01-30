import React from 'react'
import "./UserInfo.css"

const UserInfoComponent = ({avatar, name, location, repos, date, bio}) => {
  return (
    <div className='user-info'>
        <img src={avatar} alt={name} />
        <h2>{name}</h2>
        <p>{location}</p>
        <p>{repos}</p>
        <p>{date}</p>
        <p>{bio}</p>
    </div>
  )
}

export default UserInfoComponent