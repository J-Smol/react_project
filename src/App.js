import React from 'react';
import Advertising from './components/Advertising/Advertising';
import Button from './components/Button/Button';
import Games from './components/Games/Games';
import Hobby from './components/Hobby/Hobby';
import Politics from './components/Politics/Politics';
import Sport from './components/Sport/Sport';
import './App.css';

class App extends React.Component {
  
  state = {
    pageTitle : 'Что вам интересно?'
  }

  titleHandler = newTitle => {
     this.setState({
       pageTitle : newTitle,
       advActive : false,
       gamesActive : false,
       hobbyActive : false,
       politicsActive : false,
       sportActive : false
     });
  }

  showAdv = () => {
    this.setState({
      pageTitle : 'Advertising',
      advActive : true,
      gamesActive : false,
      hobbyActive : false,
      politicsActive : false,
      sportActive : false
    })
  }

  showGames = () => {
    this.setState({
      pageTitle : 'Games',
      advActive : false,
      gamesActive : true,
      hobbyActive : false,
      politicsActive : false,
      sportActive : false
    })
  }

  showHobby = () => {
    this.setState({
      pageTitle : 'Hobby',
      advActive : false,
      gamesActive : false,
      hobbyActive : true,
      politicsActive : false,
      sportActive : false
    })
  }

  showPolitics = () => {
    this.setState({
      pageTitle : 'Politics',
      advActive : false,
      gamesActive : false,
      hobbyActive : false,
      politicsActive : true,
      sportActive : false
    })
  }

  showSport = () => {
    this.setState({
      pageTitle : 'Sport',
      advActive : false,
      gamesActive : false,
      hobbyActive : false,
      politicsActive : false,
      sportActive : true
    })
  }


  render(){
    return (
      <div className="App">

        <Button
          changeBlock={() => this.showAdv()}
          title={'Advertising'}
        />

        <Button
          changeBlock={() => this.showGames()}
          title={'Games'}
        />

        <Button
          changeBlock={() => this.showHobby()}
          title={'Hobby'}
        />

        <Button
          changeBlock={() => this.showPolitics()}
          title={'Politics'}
        />

        <Button
          changeBlock={() => this.showSport()}
          title={'Sport'}
        />

        <h1>{this.state.pageTitle}</h1>

        {this.state.advActive ? <Advertising/> : 
         this.state.gamesActive ? <Games/> : 
         this.state.hobbyActive ? <Hobby/> : 
         this.state.politicsActive ? <Politics/> : 
         this.state.sportActive ? <Sport/> : null}

        

      </div>
    )
  }
} 

export default App;
