const Input = (props) => {
  return (
    <div className={`form-control ${props.formClass}`}>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className}
      />
      {props.hasError && <p className="error-text">{props.errorMsg}</p>}
    </div>
  );
};

export default Input;
