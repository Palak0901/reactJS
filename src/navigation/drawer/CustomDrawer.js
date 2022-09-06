import Drawer from "react-modern-drawer";

const CustomDrawer = (props) => {
  return (
    <Drawer
      open={props.isOpen}
      onClose={props.toggleDrawer}
      direction="left"
      className="drawer"
      size={350}
      overlayOpacity={0.5}
    >
      <div
        style={{
          fontSize: 18,
          color: "#000",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {props.label}
      </div>
      <div style={{ flexDirection: "row", alignItems: "center" }}>
        <div style={{ display: "flex" }}>
          <img
            src={props.image}
            style={{ height: 70, width: 70, borderRadius: 50 }}
          />
          <label
            style={{
              fontSize: 16,
              color: "maroon",
              marginLeft: 20,
              alignSelf: "center",
            }}
          >
            {props.details}
          </label>
        </div>
        <nav
          onClick={() => {
            //  navigate(screenName.login)
          }}
          style={{}}
        >
          <label
            style={{
              fontSize: 18,
              color: "#000",
              textAlign: "center",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            Logout
          </label>
        </nav>
      </div>
    </Drawer>
  );
};
export default CustomDrawer;
