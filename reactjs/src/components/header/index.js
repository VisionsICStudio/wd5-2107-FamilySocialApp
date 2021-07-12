import styles from './header.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import {
  Dropdown,
  DropdownContent,
  DropdownMenu,
  DropdownTrigger,
  Icon,
} from 'bloomer';
import { Link, useHistory } from 'react-router-dom';

export default function Header({ loggedIn, logout, user }) {
  const history = useHistory();
  const onClickLogout = (e) => {
    e.preventDefault();
    logout();
    history.push('/');
  };
  return (
    <header className={styles.background}>
      <a href="/">
        <div className={styles.logo}>
          <span className={styles.logoFont}>FamilySocial</span>
        </div>
      </a>
      <div className={styles.searchBar}>
        <img
          className={styles.searchBarIcon}
          src="/search_icon.svg"
          alt="search"
        />
        <input
          className={styles.searchBarInput}
          name="search"
          placeholder="search by keywords or events..."
        />
      </div>
      {loggedIn && (
        <div className={styles.loggedInMenu}>
          <Link to="/create-post" className={styles.navButton}>
            New Post
          </Link>
          <Dropdown isHoverable isAlign="right">
            <DropdownTrigger aria-haspopup="true" aria-controls="dropdown-menu">
              <img
                src={user.avatar}
                className={styles.avatar}
                alt={user.name}
              />
              <Icon
                icon="angle-down"
                isSize="small"
                className="fa fa-angle-down"
              />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownContent>
                <Link to={`/users/${user.id}`} className="dropdown-item">
                  Profile
                </Link>
                <Link to="/settings" className="dropdown-item">
                  Settings
                </Link>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  onClick={onClickLogout}
                  className="dropdown-item"
                  role="presentation"
                >
                  Logout
                </a>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}

      {!loggedIn && (
        <div className={styles.guestMenu}>
          <Link to="/login" className={styles.navLink}>
            Login
          </Link>
          <Link to="/join" className={styles.navButton}>
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};
Header.defaultProps = {
  loggedIn: true,
  logout: () => {},
  user: {
    avatar: 'https://i.pravatar.cc/100',
    id: 'ffc6d3db-3e8a-4d18-a18a-d3d8e9d62111',
  },
};
