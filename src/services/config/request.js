import axios from "axios";
// import { Alert } from "react-native";
// import RNFetchBlob from 'rn-fetch-blob';
import constant from "./constant";
axios.defaults.baseURL = constant.baseURL;

var isError = 0;
const ErrorHandler = async (error) => {
  // if (error.message == "Network Error") {
  //   Alert.alert("No Internet", "Check Your Internet Connection .");
  // } else if (error.status == 401) {
  //   await Utils.navigationServiceImport.navigateAndSimpleReset(
  //     Utils.screenName.session,
  //     0
  //   );
  // } else if (error.message == "Request failed with status code 400") {
  //   //alert()
  // } else if (error.message == "Request failed with status code 500") {
  //   Alert.alert(
  //     "Server Error",
  //     "This last action was not completed successfully."
  //   );
  // } else if (error.message == "timeout of 0ms exceeded") {
  //   Alert.alert("Bad Internet", "Bad Internet Connection.");
  // } else if (error.message == "Request failed with status code 429") {
  //   Alert.alert(
  //     "Too Many Requests response",
  //     "You send too many requests to server please hold for moment."
  //   );
  // }
};

const get = (slug) => {
  return new Promise((resolve, reject) => {
    axios
      .get(slug)
      .then((response) => {
        isError = 0;
        resolve(response.data);
      })
      .catch((error) => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error);
      });
  });
};

const getWithParams = (slug, data, token = null) => {
  return new Promise((resolve, reject) => {
    axios
      .get(slug + data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        isError = 0;
        resolve(response.data);
      })
      .catch((error) => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doPostWithAuth = (slug, data, token = null) => {
  return new Promise((resolve, reject) => {
    axios
      .post(slug, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        isError = 0;
        resolve(res.data);
      })
      .catch((error) => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doPost = (slug, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(slug, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        isError = 0;
        resolve(res.data);
      })
      .catch((error) => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doPut = (slug, data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put(slug, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        isError = 0;
        resolve(res.data);
      })
      .catch((error) => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doDelete = (slug, token) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(slug, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        isError = 0;
        resolve(res.data);
      })
      .catch((error) => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doPostWithImage = (slug, data) => {
  // return new Promise((resolve, reject) => {
  //   RNFetchBlob.fetch(
  //     'POST',
  //     slug,
  //     {'Content-Type': 'multipart/form-data'},
  //     data,
  //   )
  //     .then(response => {
  //       resolve(response);
  //     })
  //     .catch(error => {
  //       reject(error);
  //     });
  // });
};

export {
  get,
  getWithParams,
  doPostWithAuth,
  doPost,
  doPut,
  doDelete,
  doPostWithImage,
};
