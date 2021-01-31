import React from "react";

const Input = ({ name, label, value, onChange, errors }) => {
  return (
    <div className="form-group">
      <label htmlfor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
