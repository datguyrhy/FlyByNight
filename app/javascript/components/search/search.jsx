import React from 'react';
import SearchConfirm from "../searchConfirm/searchConfirm"
import axios from 'axios';

class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      places:[],
      query: '',
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


  }
  fetchSearchResults(query){

    const searchUrl = `https://pixabay.com/api/?key=14443748-cac7f399de258361f6ce6b8da&q=${query}&page=1`;
    axios.get(searchUrl,query)
    .then((response)=>{
      const data = response.data
      this.setState({ places: data })
      console.log(this.state.places.hits);
    })
    .catch((error)=>{
      console.log(error);
    })
  };


  render(){
    const places = this.state.places.hits ? this.state.places.hits:[];
    return(
      <div>
        <div className="row">
          <input className="search-icon" placeholder= "Enter Destination" onChange ={()=>{this.inputHandler()}}/> &ensp;&ensp;
          <button className="btn btn-secondary" onClick={()=>this.clickHandler()} ><p>Lets go</p></button>
        </div>
        <div className="row">
        <SearchConfirm places={places}/>
        </div>
      </div>

    )
  }
}
export default Search;
