type propType = {
  style?: any,
  onClick?: () => void | undefined,
  children?: any,
};
const ButtonComponent = (props: propType) => {
  return (
    <button style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default ButtonComponent;
