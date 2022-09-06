import { useLocation } from "react-router-dom";
import "./style.css";

const DetailsPage = (props) => {
  const { state } = useLocation();
  return (
    <div className="form">
      <label className="name">{state.item.firstName}</label>
      <label className="name">{state.item.lastName}</label>
      <label className="emailpassword">{state.item.email}</label>
      <label className="password">{state.item.password}</label>
      <label className="name">{state.item.confirmPassword}</label>
    </div>
  );
};

export default DetailsPage;
