import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "../config/firebase.config";

/**
 * Login Function
 * @param {object} values object with email and password keys
 * @returns id
 */
const login = async (values) => {
  let { email, password } = values;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

/**
 * Signup Function
 * @param {object} values object with email and password keys
 */
const register = async (values) => {
  let { email, password } = values;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

/**
 * logout current user Function
 */
const logout = async () => {
  try {
    await signOut(auth);
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
