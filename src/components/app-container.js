import React from "react";
import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";
import Repositorios from "./repos";
import PropTypes from "prop-types";

const AppContainer = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) =>  (
    <div className='app'>
      <Search handleSearch={handleSearch} isDisabled={isFetching}/>
      {isFetching && <div>Carregando...</div>}
      {!!userinfo && <UserInfo userinfo={userinfo}/>}

      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}

      {!!repos.length && <Repositorios 
        className='repos' 
        title='Repositórios' 
        repos={repos}/>
      }

      {!!starred.length &&  <Repositorios 
        className='starred' 
        title='Favoritos'
        repos={starred}/>
      }
    </div>  
)

AppContainer.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default AppContainer;