/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable simple-import-sort/sort */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import 'bulma/css/bulma.css';
import styles from './app.module.css';

import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Footer from './components/footer';
import Header from './components/header';
import SideMenu from './components/sideMenu';

// pages
import Home from './pages/home';
import Join from './pages/join';
import Login from './pages/login';
import Post from './pages/post';
import PostAdmin from './pages/postAdmin';
import PostForm from './pages/postForm';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Event from './pages/event';
import Events from './pages/events';
import Users from './pages/users';

function App() {
  return (
    <section className={styles.backgroundBody}>
      <section className={styles.container}>
        <Router>
          <Header />
          <SideMenu />
          <main className={styles.content}>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-post" component={PostForm} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/posts/edit/:postId" component={PostForm} />
            <Route exact path="/posts/:postId" component={Post} />
            <Route exact path="/posts" component={PostAdmin} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:userId" component={Profile} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/:eventId" component={Event} />
          </main>
          <Footer />
        </Router>
      </section>
    </section>
  );
}

export default App;
