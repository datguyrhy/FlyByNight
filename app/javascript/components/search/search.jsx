import React from 'react';
import axios from 'axios';

class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      places:[]
    }

  }
  getPlaces(){

    const url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters';

    axios.get(url)
      .then((response) => {

        const data = response.data

        this.setState({ posts: data })

      }).catch((error)=>{
        console.log(error);
      })
  }
  render(){
    return(
      <div>
        <input onClick ={(event)=>{getPlaces}}/>
      </div>

    )
  }
}
export default Search;
