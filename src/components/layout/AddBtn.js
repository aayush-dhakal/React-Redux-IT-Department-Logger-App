import React from "react";

const AddBtn = () => {
  return (
    // check this link for materialize action btn detail https://materializecss.com/floating-action-button.html
    // check this link for modal detail https://materializecss.com/modals.html#!
    // check this link to implement similar feature in bootstrap https://pro.propeller.in/components/floating-button
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
