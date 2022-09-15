type propType = {
  style?: any,
  onClick?: () => void | undefined,
  children?: any,
  className?: any,
};
const DivComponent = (props: propType) => {
  return (
    <div
      style={props?.style}
      className={props.className}
      onClick={props?.onClick}
    >
      {props?.children}
    </div>
  );
};
export default DivComponent;
