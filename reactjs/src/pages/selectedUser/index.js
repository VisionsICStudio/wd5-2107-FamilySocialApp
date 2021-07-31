/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import styles from './selectedUser.module.css';

import React from 'react';

import { useParams } from 'react-router-dom';

function SelectedUser({ users }) {
  const { uuid } = useParams();
    return (
      <>
        <h1 className={styles.heading}>Selected User</h1>
        {users.filter(user => user.login.uuid === uuid).map(selectedUser => (
          <li className={styles.trial}>
            {selectedUser.name.first}
            {' '}
            {selectedUser.name.last}
          </li>
        ))}
      </>
    )
}

export default SelectedUser;
