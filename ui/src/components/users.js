import { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/users');
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className='part all-users'>
      <div className='title'>All Users</div>
      <div className='description'>Users and their ages</div>
      <div className='list'>
        <div className='listitem'>
          <div className='listitem-1'>
            <strong>Username</strong>
          </div>
          <div className='listitem-2'>
            <strong>Age</strong>
          </div>
        </div>
        {users.map(({ username, age }, index) => {
          return (
            <div className='listitem data' key={index + username}>
              <div className='listitem-1'>{username}</div>
              <div className='listitem-2'>{age}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
