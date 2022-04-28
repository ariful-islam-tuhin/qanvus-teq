import React from 'react';

const Users = (props) => {
    const { displayName, email, _id } = props.user;
    return (
        <div className="container">
        <div className="row">
          <div className="col-lg-12 p-4 mb-3">
            <h3 className="text-primary">{displayName}</h3>
            <h3 className="text-warning">{email}/-</h3>
            <h3 className="text-warning">{_id}/-</h3>
      
          </div>
      
        </div>
      </div>
    );
};

export default Users;