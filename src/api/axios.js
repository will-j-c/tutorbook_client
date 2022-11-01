import axios from 'axios';
//https://tutorbook-app.herokuapp.com/api/v1
//http://localhost:8000/api/v1
//http://localhost:5000/api/v1
const BASE_URL = 'http://localhost:8000/api/v1';
export const retrieveTokenAndCreatePrivateAxiosInstance = async (currentUser) => {
  const idToken = await currentUser?.getIdTokenResult(true);
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${idToken?.token}`
    }
  });
  return axiosInstance;
};

export default axios.create({
  baseURL: BASE_URL
});
