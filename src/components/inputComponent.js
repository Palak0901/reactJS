import React from "react";
import Utils from "../utils";

type propType = {
  style?: any,
  InputDivStyle?: any,
  onClick?: () => void | undefined,
  onClickView?: () => void | undefined,
  value?: any,
  onChange?: () => void | undefined,
  type?: string | undefined,
  placeholder?: string | undefined,
  hideImage?: Boolean,
  show?: Boolean,
};
const InputComponent = (props: propType) => {
  return (
    <Utils.components.divComponent style={styles.container}>
      <Utils.components.divComponent style={styles.hideImageContainer}>
        <input
          style={props?.style}
          value={props?.value}
          onChange={props?.onChange}
          type={props?.type}
          placeholder={props?.placeholder}
        />
        <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
          {props?.hideImage &&
            (props?.show ? (
              <img
                onClick={props.onClick}
                style={{ width: 20 }}
                src={Utils.allImage.hideImage}
              />
            ) : (
              <img
                onClick={props.onClickView}
                style={{ width: 20 }}
                src={Utils.allImage.viewImage}
              />
            ))}
        </div>
      </Utils.components.divComponent>
    </Utils.components.divComponent>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  hideImageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 5,
    width: "70%",
  },
  inputContainer: {
    height: 30,
    width: "75%",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
  },
};
export default InputComponent;
