import React from "react";
import PropTypes from "prop-types";

const Repositorios = ({className, title, repos}) =>  (
    <div className={className}>
        <h2>{title}</h2>
        <ul>
            {repos.map((repo) => (
                <li key={repo.id}><a href={repo.link}>{repo.name}</a></li>
            ))}
        </ul>
    </div>   
)

Repositorios.defaultProps = {
    className: ''
}

Repositorios.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
}

export default Repositorios;