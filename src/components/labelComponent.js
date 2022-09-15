type propType = {
  style: any,
  onClick: () => void | undefined,
  children: any,
  className: any,
};

const LabelComponent = (props: propType) => {
  return (
    <label
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </label>
  );
};
export default LabelComponent;
