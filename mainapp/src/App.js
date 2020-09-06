import React from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Axios from 'axios';
import Search from '././components/Search';

class App extends React.Component {

  state = {
    users : [],
    loading : false,
  }
  async componentDidMount(){

    this.setState({loading : true})
    const res = await Axios.get(`https://api.github.com/users?client_id=$
    {process.env.REACT_APP_GH_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GH_CLIENT_SECRET}`);
    // console.log(res.data)
    this.setState({ users : res.data , loading : false})

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

  reloadUsersList = () =>{
    window.location.reload();
  }

  clearUsers = () => {
      this.setState({loading : false,
      users : []
      })
  }
  render(){
    return (
      <div className="App">
        <header>
           
            <Navbar title=" GihubFinder"/>
            <Search searchUsers = {this.searchUsers} clearUsers = {this.clearUsers}  reloadUsersList = {this.reloadUsersList}/>
            <Users loading = {this.state.loading} users = {this.state.users} />        
        </header>
      </div>
    );
  }
}

export default App;
