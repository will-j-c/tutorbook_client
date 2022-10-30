import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';
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
