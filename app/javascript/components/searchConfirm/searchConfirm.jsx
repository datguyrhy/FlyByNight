import React from 'react'
import styles from './styles'
class SearchConfirm extends React.Component{
  constructor() {
    super()
    this.state = {

    }
  }



  render(){
  console.log(this.props.places);

  let places = this.props.places ? this.props.places.map( (place, index)=>{
    return(
      <div key={index}>
        <div className="card">
        <a href="#">
          <div className="card-body">
          <img src={place.largeImageURL} className="card-img-top"/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

          </div></a>
        </div>
      </div>
        )
  }) : '';
  return(
    <div className='container'>
      <div classname='row'>
        <div className='col-12'>
            {places}
        </div>
      </div>
    </div>


    )
  }

}

export default SearchConfirm
