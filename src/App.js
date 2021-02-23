import Main from './components/MainComponent';
import { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>

    );
  } 
}

export default App;
