type propType = {
  style?: any,
  onClick?: () => void | undefined,
  children?: any,
};
const DivComponent = (props: propType) => {
  return (
    <div style={props?.style} onClick={props?.onClick}>
      {props?.children}
    </div>
  );
};
export default DivComponent;
