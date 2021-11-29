/**
 * Login Function
 * @param {object} values object with email and password keys
 */
const login = (values) => {
  let { email, password } = values;
  try {
  } catch (error) {
    console.log(error);
  }
};

/**
 * Signup Function
 * @param {object} values object with email and password keys
 */
const register = (values) => {
  let { email, password } = values;
  try {
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get current user Function
 * @param {object} values object with email and password keys
 */
const getUser = () => {};

export default AuthService = {
  login: login,
  signin: register,
  user: getUser,
};
