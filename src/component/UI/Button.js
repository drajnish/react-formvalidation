const Button = (props) => {
  return (
    <button className="btn" type={props.type}>
      {props.palceholder}
    </button>
  );
};

export default Button;
