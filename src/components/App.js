import React, { Component } from 'react';
import Input from './UI/Input/Input';
import classes from './App.css';
import InfoLogo from '../images/information-button.svg';
import LocationLogo from '../images/location-button.svg';
import CheckLogo from '../images/check-button.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className={classes.Form} >
          <div className={classes.title}>
            <img src={InfoLogo} alt="infoLogo" />
            <h2>Käyttäjätiedot:</h2>
          </div>
          <div className={classes.nameRow}>
            <div className={classes.Field} >
              <label>Etunimi:</label>
              <Input placeholder="Etunimi" />
            </div>

            <div className={classes.Field}>
              <label>Sukunimi:</label>
              <Input placeholder="Sukunimi" />
            </div>
          </div>
          
          <div className={classes.title}>
            <img src={LocationLogo} alt="locationLogo" />
            <h2>Kotipaikka</h2>
          </div>
          <div className={classes.addressRow} >
            <div className={classes.Field} >
              <label>Katuosoite:</label>
              <Input />
            </div>
            <div className={classes.Field} >
              <label>Asunto:</label>
              <Input />
            </div>
          </div>
          
          <div className={classes.locationRow} >
            <div className={classes.Field} >
              <label>Postinumero:</label>
              <Input />
            </div>
            <div className={classes.Field} >
              <label>Paikkakunta:</label>
              <Input />
            </div>
          </div>

          <button type="submit" className={classes.submitButton} >
          <img src={CheckLogo} alt="checkLogo" />
          Tallenna tiedot
          </button>
        </form>
      </div>
    );
  }
}

export default App;
