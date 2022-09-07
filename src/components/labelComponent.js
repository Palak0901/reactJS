type propType = {
  style: any,
  onClick: () => void | undefined,
  children: any,
};

const LabelComponent = (props: propType) => {
  return (
    <label style={props.style} onClick={props.onClick}>
      {props.children}
    </label>
  );
};
export default LabelComponent;
