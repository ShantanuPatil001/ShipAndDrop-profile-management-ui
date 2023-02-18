import axios from "axios";
import { app } from "./firbaseInit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const headers = {
  "Content-Type": "application/json",
};

const registerCustomer = (registerCustomer) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("/api/registerCustomer", registerCustomer, {
        headers: headers,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

const login = (login) => {
  return new Promise(async (resolve, reject) => {
    let user = null;
    await signInWithEmailAndPassword(getAuth(app), login.email, login.password)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        user.getIdToken(true).then((idToken) => {
          axios
            .get(`/api/login?token=${idToken}`, {
              headers: headers,
            })
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
              reject(error.response.data);
            });
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            reject({
              code: errorCode,
              description: "Invalid Email! Please try again",
            });
            break;
          case "auth/wrong-password":
            reject({
              code: errorCode,
              description: "Wrong Password! Please try again",
            });
            break;
          default: {
            reject({ code: errorCode, description: "Internal Error" });
          }
        }
      });
    //
  });
};

export { registerCustomer, login };
