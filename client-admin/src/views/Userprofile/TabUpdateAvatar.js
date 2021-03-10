import React, { useEffect } from 'react';
import user4 from './../../assets/img/user4-128x128.jpg';

const TabUpdateAvatar = ({ dataUser }) => {

  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);

  return (
    <div className="card card-primary card-outline">
      <div className="card-body box-profile">
        <div className="text-center">
          <img className="profile-user-img img-fluid img-circle" src={user4} alt="User" />
        </div>
        <h3 className="profile-username text-center">{dataUser.username}</h3>
        <p className="text-muted text-center">Software Engineer</p>
        <span className="btn btn-success col fileinput-button">
          <i className="fas fa-plus"></i>
          <span>Add files</span>
        </span>
        {/* <ul className="list-group list-group-unbordered mb-3">
          <li className="list-group-item">
            <b>Followers</b> <a className="float-right" href="/">1,322</a>
          </li>
          <li className="list-group-item">
            <b>Following</b> <a className="float-right" href="/">543</a>
          </li>
          <li className="list-group-item">
            <b>Friends</b> <a className="float-right" href="/">13,287</a>
          </li>
        </ul> */}
        <button className="btn btn-primary btn-block"><b>Follow</b></button>
      </div>
    </div>
  )
}

export default TabUpdateAvatar;
