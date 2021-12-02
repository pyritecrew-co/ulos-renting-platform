import { firestore } from "../config/firebase.config";
import { collection, getDocs } from "firebase/firestore";

const REQUEST_QUERY = collection(firestore, "requests");

const createRequestItem = (userID) => {};

/**
 * GET ALL REQUEST STORED IN FIRESTORE
 * @returns an array of requests object
 */
const readAllRequestItems = async () => {
  try {
    const data = await getDocs(REQUEST_QUERY);
    let requests = data.docs.map((doc) => ({ ...doc.data(), id_req: doc.id }));
    return requests;
  } catch (error) {
    return new Error(error);
  }
};

const readOneRequestItem = async (requestID) => {};

const updateRequestItem = async (requestID) => {};

const deleteRequestItem = async (requestID) => {};

const RequestService = {
  getAllRequests: readAllRequestItems,
  getOneRequest: readOneRequestItem,
  addRequest: createRequestItem,
  editRequest: updateRequestItem,
  removeRequest: deleteRequestItem,
};

export default RequestService;
