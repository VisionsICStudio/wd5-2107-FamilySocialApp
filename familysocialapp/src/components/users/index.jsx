
    import React from 'react'

    import styles from './Users.module.css'

    const Users = ({ users }) => {
      return (
        <div>
          <center><h1>FamilySocial User List (from API) </h1></center>
          {users.map((user) => (
            <div class="card">
                <img class={styles.avatar} src={user.picture.medium} alt="user pcture" />
              <div class="card-body">
                <h5 class="card-title">{user.name.first} {user.name.last}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p class="card-text"></p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Users
