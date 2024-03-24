import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Odunlade Adekola',
      bio: "Odunlade Jonathan Adekola is a Nigerian actor, singer, film-maker, film producer and film director. He gained popularity and was widely known for his lead role in Ishola Durojaye's 2003 movie, Asiri Gomina Wa, and has acted in many Nollywood movies since then.",
      imgSrc: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/3136/production/_120489521_84aa6763-d7fe-4d67-bac9-ee768c11ec86.jpg',
      profession: 'Actor',
    },
    show: false,
    intervalId: null,
    timeSinceMount: 0,
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.updateTimeSinceMount, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1 className='person'>PERSON PROFILE</h1>
        <button onClick={this.toggleProfile}>{show ? 'Hide Profile' : 'Show Profile'}</button>
        {show && (
          <div className="profile">
            <img style={{width : '35rem'}} src={imgSrc} alt="Profile" />
            <h2 className='name'>{fullName}</h2>
            <p className='bio'>{bio}</p>
            <span>PROFESSION: {profession}</span>
          </div>
        )}
        <p className='tsm'>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;