
import React, { useEffect, useState } from "react";
import Users from '../Users/Users';


const DisplayUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    return (
        <div className='p-4'>
            <div>
                {users.map((user) => (
                    <Users key={user._id} user={user}></Users>
                ))}
            </div>
        </div>
    );
};

export default DisplayUser;