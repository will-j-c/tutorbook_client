import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1';

export const retrieveTokenAndCreatePrivateAxiosInstance = async (auth) => {
  const idToken = await auth?.currentUser?.getIdTokenResult(true);
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
