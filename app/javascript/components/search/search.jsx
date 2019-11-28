import React from 'react';
import axios from 'axios';

class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      places:[],
      query:""
    }

  }

  inputHandler(){
    let query = event.target.value
    console.log(query);
  }

  getPlaces(){
    console.warn();
    const url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters';

    axios.get(url)
      .then((response) => {

        const data = response.data

        this.setState({ places: data })

      }).catch((error)=>{
        console.log(error);
      })
  }

  render(){
    return(
      <div>
        <input placeholder= "Enter Destination" onChange ={()=>{this.inputHandler()}}/>
      </div>

    )
  }
}
export default Search;
