import React from "react";
import PropTypes from "prop-types";

const Actions = ({getRepos, getStarred}) =>  (
    <div className='actions'>
        <button onClick={getRepos}>Ver repositórios</button>
        <button onClick={getStarred}>Ver favoritos</button>
    </div>   
)
Actions.prototypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}
export default Actions;