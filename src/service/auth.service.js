import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { collection, doc, setDoc } from "@firebase/firestore";
import { authentication, firestore } from "../config/firebase.config";

const USERS_QUERY = collection(firestore, "users");

/**
 * Login Function
 * @param {object} values object with email and password keys
 * @returns id
 */
const login = async (values) => {
  let { email, password } = values;
  try {
    await signInWithEmailAndPassword(authentication, email, password);
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
    await createUserWithEmailAndPassword(authentication, email, password)
      .then(async (userCredential) => {
        await setDoc(doc(USERS_QUERY, userCredential.user.uid), { email });
      })
      .catch((err) => console.log(err));
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
