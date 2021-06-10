import React, { Component } from 'react';
import './App.css';

import ContactState from './context/ContactState'

import ContactList from './components/organisms/ContactList'
import NewContact from './components/organisms/NewContact'
import ProfileRegisterList from './components/organisms/ProfileRegisterList'


class App extends Component {
  render() {
    return (
      <ContactState>
        <div className='container'>
          <div className='row'>

            <div className='col'>
              <div className='row'>
                <NewContact />
              </div>
              <div className='row'>
                <ContactList />
              </div>
            </div>

            <div className='col'>
              <h1>Profile Registers</h1>
              <ProfileRegisterList />
            </div>
          </div>
        </div>
      </ContactState>
    )
  }
}

export default App;
