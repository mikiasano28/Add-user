import React, { useState, Fragment } from 'react';

import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';
import Example from './Test';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }, // Don't forget put here unique key
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      <Example />
    </Fragment>
  );
}

export default App;