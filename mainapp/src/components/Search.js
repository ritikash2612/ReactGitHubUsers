import React, { useState } from 'react'
import Proptypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, reloadUsersList, setAlert}) =>  {

  const [text, setText] = useState(''); 
  
  const onChange = (e) => {
    setText(e.target.value)
    // console.log(e.target.value)
  }

  
  const onSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      setAlert('Please enter some text.', 'light')
    }
    else{
      // console.log(this.state.text)
      searchUsers(text)
      setText('')
    }
  }

  return (
    <div>
        <form  onSubmit = {onSubmit} style = {{ marginTop: '20px', marginLeft: '0px', marginRight : '0px', gridGap: '1rem'}}>

          <input className="form-control" type="text" name = "text" placeholder="Search users..." aria-label="Search"
          value = {text} onChange= {onChange}/>
          <input type ="submit"  value = "Search" className = "btn btn-dark btn-block"/> 

        </form>
        <button className= "btn btn-light btn-block"  onClick= {clearUsers}>Clear</button>
        <button className= "btn btn-dark btn-block"  onClick= {reloadUsersList}>Reload List</button>

      </div>
    )
  }

Search.propTypes = {
  searchUsers : Proptypes.func.isRequired,
  setAlert :  Proptypes.func.isRequired,
}

export default Search
