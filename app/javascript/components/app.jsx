import React from 'react';
import Search from '../components/search/search'
import Styles from './styles.scss';

class App extends React.Component{
  constructor(){
    super()
    this.state ={

    }
  }

  render(){
    return(
      <div className="container-fluid ">
        <div className="jumbotron">
          <div className ="row">
            <div className =" offset-2 col-4 d-flex flex-column align-items-start mt-5">
              <h1 className="display-5">Welcome to FlyByNight</h1>
              <p className="lead">Create fully customized day-by-day travel itineraries in minutes</p>

              <button className="btn btn-primary btn-lg" role="button">Learn more</button>
            <hr className="my-4"/>

            </div>
            <div className="offset-1 col-4-l  d-flex flex-column mt-5">
              <Search/>

            </div>
          </div>

      </div>
    </div>
    )
  }
}
export default App
