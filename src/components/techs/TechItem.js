import React from "react";
import { useDispatch } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech: { id, firstName, lastName } }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTech(id));
    M.toast({ html: "Technician Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
