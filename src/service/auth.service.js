import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { authentication } from "../config/firebase.config";

// FIXME: from offline going to online login creates an infinite loading screen

/**
 * Login Function
 * @param {object} values object with email and password keys
 * @returns id
 */
const login = async (values) => {
  let { email, password } = values;

  await signInWithEmailAndPassword(authentication, email, password)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Signup Function
 * @param {object} values object with email and password keys
 */
const register = async (values) => {
  let { email, password } = values;

  await createUserWithEmailAndPassword(authentication, email, password)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * logout current user Function
 */
const logout = async () => {
  try {
    await signOut(authentication);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

/**
 * An objectthat holds authentication functionalities
 */
const AuthService = {
  login: login,
  register: register,
  logout: logout,
};

export default AuthService;
