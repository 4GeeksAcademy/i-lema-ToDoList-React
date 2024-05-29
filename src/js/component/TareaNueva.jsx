import React from "react";
import PropTypes from 'prop-types';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TareaNueva = ({ tarea, deleteTask }) => {
    return (
        <li className="list-group-item text-secondary">
            {tarea}
            <span onClick={deleteTask}><FontAwesomeIcon icon={faXmark} /></span>
        </li>
    );
};

TareaNueva.propTypes = {
    tarea: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default TareaNueva;