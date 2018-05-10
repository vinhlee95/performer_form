import React, { Component } from 'react';
import Input from './UI/Input/Input';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className={classes.Form} >
          <h2>Käyttäjätiedot:</h2>
          <div className={classes.nameRow}>
            <div className={classes.Field} >
              <label>Etunimi</label>
              <Input placeholder="Sukunimi" />
            </div>

            <div className={classes.Field}>
              <label>Sukunimi</label>
              <Input placeholder="Sukunimi" />
            </div>
          </div>

          <h2>Kotipaikka</h2>
          <div className={classes.addressRow} >
            <div className={classes.Field} >
              <label>Katuosoite</label>
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
        </form>
      </div>
    );
  }
}

export default App;
