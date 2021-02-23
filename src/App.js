import Main from './components/MainComponent';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Main />
      </div>
    );
  } 
}

export default App;
