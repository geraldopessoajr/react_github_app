import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({userinfo}) =>  (
    <div className='user-info'>
      <img src={userinfo.photo} />
      <h1 className='username'>
        <a href={`https://github.com/${userinfo.login}`}> {userinfo.name}</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: {userinfo.repository}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
)

UserInfo.prototypes = {
  userinfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    repository: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  })
}

export default UserInfo;
