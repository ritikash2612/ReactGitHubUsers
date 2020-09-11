import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
import Users from './components/Users';
import Axios from 'axios';
import Search from '././components/Search';
import Alert from '././components/Alert'
import { BrowserRouter, Switch, Route , Link} from 'react-router-dom'
import { About } from './components/About';


class App extends React.Component {

  state = {
    users : [],
    user: {},
    loading : false,
    alert : null,
  }
  async componentDidMount(){

    this.setState({loading : true})
    const res = await Axios.get(`https://api.github.com/users?client_id=$
    {process.env.REACT_APP_GH_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GH_CLIENT_SECRET}`);
    // console.log(res.data)
    this.setState({ users : res.data , loading : false})

  }

  getUser = async (username) => {
    this.setState({loading : true})
    const res = await Axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GH_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GH_CLIENT_SECRET}`);
    // console.log(res.data)
    this.setState({ user : res.data , loading : false}) 

  }
  // Search User by name : getting the props up from search bar
  searchUsers = async (text) => {
    this.setState({loading : true})
    const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GH_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GH_CLIENT_SECRET}`);
    // console.log(res.data)
    this.setState({ users : res.data.items , loading : false})
    console.log('searching... '+text)
  }

  // reload the list
  reloadUsersList = () =>{
    window.location.reload();
  }

  //clear search result
  clearUsers = () => {
      this.setState({loading : false,
      users : []
      })
  }

  // search alert on empty search request
  setAlert= (msg, type) =>{
    this.setState({alert :{msg, type}});

    setTimeout(() => this.setState({alert : null}), 5000);
  }
  render(){
    return (
        <div className="App">
          <header>
              <Navbar title=" GihubFinder"/>
              <div className="container">
                <Alert alert ={this.state.alert}></Alert>
                    <Search searchUsers = {this.searchUsers} clearUsers = {this.clearUsers}  reloadUsersList = {this.reloadUsersList} setAlert = {this.setAlert}/>
                    <Users loading = {this.state.loading} users = {this.state.users} />  
                
              </div>     
          </header>
        </div>
    );
  }
}

export default App;
