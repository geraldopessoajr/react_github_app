import React, { Component } from "react";
import AppContainer from "./components/app-container";
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred:[],
      isFetching: false
    }
  }

  getGithubApi (login, type)  {
    const InternalType = type ? `/${type}` : ''
    return `https://api.github.com/users/${login}${InternalType}`;
  }


  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which  || e.keyCode
    const ENTER = 13
    if(keyCode === ENTER){
       this.setState({
         isFetching: true
       })
        ajax()
        .get(this.getGithubApi(value))
        .then((result) => {
            this.setState({
              userinfo:{
                name: result.name,
                repository: result.public_repos,
                followers: result.followers,
                following: result.following,
                login: result.login,
                photo: result.avatar_url
              },
              repos:[],
              starred:[]
            })
        })
        .always(()=> {
          this.setState({
            isFetching: false
          })
        })
    }
  }

  getRepos (type) {
      ajax()
      .get(this.getGithubApi(this.state.userinfo.login, type))
      .then((result) => {
        console.log(result)
          this.setState({
            [type]: result.map((repo) => {
              return {
                id: repo.id,
                name: repo.full_name,
                link: repo.html_url
              }
            })
          })
      })
  }

  render(){
    return (
    <AppContainer 
      {...this.state}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={() => this.getRepos('repos')}
      getStarred={() => this.getRepos('starred')}
    />
  )}
}

export default App;
