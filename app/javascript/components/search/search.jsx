import React from 'react';
import axios from 'axios';

class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      places:[],
      query: '',
      input:'',
      clicked:false
    }
  }

  inputHandler(){
    const query = event.target.value
    console.log(query);
    this.setState({query});

  }
  clickHandler(){
    console.log("working click");
    this.state.clicked = true
    console.log(this.state.clicked);
      this.fetchSearchResults(this.state.query)
      console.log(this.state.places);

  }
  fetchSearchResults(query){

    const searchUrl = `https://pixabay.com/api/?key=14443748-cac7f399de258361f6ce6b8da&q=${query}&page=1`;
    axios.get(searchUrl,query)
    .then((response)=>{
      const data = response.data
      this.setState({ places: data })
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  // getPlaces(){
  //   console.warn();
  //   const url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters';
  //
  //   axios.get(url)
  //     .then((response) => {
  //
  //       const data = response.data
  //
  //       this.setState({ places: data })
  //
  //     }).catch((error)=>{
  //       console.log(error);
  //     })
  // }

  render(){
    return(
      <div>
        <input className="search-icon" placeholder= "Enter Destination" onChange ={()=>{this.inputHandler()}}/>
        <button className="btn btn-primary" onClick={()=>this.clickHandler()} ><p>Lets go</p></button>
      </div>

    )
  }
}
export default Search;
