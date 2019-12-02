import React from 'react';
import SearchConfirm from "../searchConfirm/searchConfirm"
import axios from 'axios';

class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      places:[],
      query: '',
      clicked:false,
      resultTog:false,

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

  clickHappened(){
    console.log("wow");
    this.setState({resultTog:true})
  }
  fetchSearchResults(query){

    const searchUrl = `https://pixabay.com/api/?key=14443748-cac7f399de258361f6ce6b8da&q=${query}&page=1&per_page=6`;
    axios.get(searchUrl)
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
    if(this.state.resultTog == true){
      var f = <SearchConfirm/>
    }
    return(
      <div>
        <div className="row">
          <input className="search-icon" placeholder= "Enter Destination" onChange ={()=>{this.inputHandler()}}/> &ensp;&ensp;
          <button className="btn btn-secondary" onClick={()=>this.clickHandler()} ><p>Lets go</p></button>
        </div>
        <div className="row">
        <button onClick={()=>this.clickHappened()}>Hi</button>
        </div>
        <SearchConfirm places={places} className="hidden"/>
        {f}
      </div>

    )
  }
}
export default Search;
