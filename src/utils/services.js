import params from "../services/config/params";
import { doPost } from "../services/config/request";
import { RegisterDetail } from "../services/redux/registerUser/action";
import { LoginDetail } from "../services/redux/user/action";

export default {
  registerDetail: RegisterDetail,
  loginDetail: LoginDetail,
  doPost: doPost,
  params: params,
};
