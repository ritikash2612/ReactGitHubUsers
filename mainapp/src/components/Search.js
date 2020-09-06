import React, { Component } from 'react'
import Proptypes from 'prop-types';

export class Search extends Component {

  state = {
    text : ''
  }

  
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
    // console.log(e.target.value)
  }

  static propTypes = {
    searchUsers : Proptypes.func.isRequired
  }
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.text)
    this.props.searchUsers(this.state.text)
    this.setState({text :''})
  }
  render() {
    return (
      <div>
          <form  onSubmit = {this.onSubmit} style = {{ marginTop: '0px', marginLeft: '0px', marginRight : '0px', gridGap: '1rem'}}>

            <input className="form-control" type="text" name = "text" placeholder="Search users..." aria-label="Search"
            value = {this.state.text} onChange= {this.onChange}/>
            <input type ="submit"  value = "Search" className = "btn btn-dark btn-block"/> 

          </form>
          <button className= "btn btn-light btn-block"  onClick= {this.props.clearUsers}>Clear</button>
          <button className= "btn btn-dark btn-block"  onClick= {this.props.reloadUsersList}>Reload List</button>

        </div>
    )
  }
}


export default Search
