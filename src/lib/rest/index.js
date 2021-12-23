/* eslint-disable */
import axios from 'axios';
import {Signer} from "casper-js-sdk";

import { APP_API_GATEWAY, CONTENT_API_GATEWAY, CONTENT_BUCKET } from '../../constants/config';
//
// const getHeaders = () => ({
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
//
// const getPrivateHeaders = () => {
//   const token = localStorage.getItem('authToken') || '';
//   return ({
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     }
//   });
// };

export const createSignature = async (id) => {
  const nonce = new Date().getTime().toString();
  const digest = `Nonce:${nonce}`;
  try {
    const signature = await Signer.signMessage(digest, await Signer.getActivePublicKey());
    return new Promise(r => r({
      headers: {
        'NETACASK_KEY': id,
        'METACASK_NONCE': nonce,
        'METACASK_SIG': signature,
      }
    }));
  } catch (e) {

  }
  return new Promise(r => r({}));
};

// export const loginWithCivic = (token) => axios.post(`${AUTH_SERVER_URL}/api/auth02/login`, { token }, getHeaders())
//   .then(({ data }) => data)
//   .catch((err) => Promise.reject(err.response?.data || err.response));
//
//
//
// export const getUserInfo = () => {
//   console.log(' => Getting userinfo ');
//   axios.post(`${AUTH_SERVER_URL}/api/profile/userinfo`, {}, getPrivateHeaders())
//     .then(({data}) => data)
//     .catch((err) => {
//       const data = err.response.data;
//       if (data && data.tokenStatus === 301) {
//         try {
//           Signer.disconnectFromSite();
//         } catch (e) {
//           console.log(e);
//         }
//         localStorage.clear();
//         window.location.reload();
//       }
//       return Promise.reject(err.response.data)
//     });
// };
//
// export const getCoinPrice = () => axios.post(`${AUTH_SERVER_URL}/api/price/coin`, {}, getHeaders())
//   .then(({ data }) => data)
//   .catch((err) => Promise.reject(err.response?.data || err.response));
//
// export const signupWithOffer = (data) => axios.post(`${AUTH_SERVER_URL}/api/profile/signupWithOffer`, data, getPrivateHeaders())
//   .then(({ data }) => data)
//   .catch((err) => Promise.reject(err.response?.data || err.response));
//
// export const getMyCollectibleToken = (data) => axios.post(`${AUTH_SERVER_URL}/api/profile/myCollectibleNfts`, data, getPrivateHeaders())
//   .then(({ data }) => data)
//   .catch((err) => Promise.reject(err.response?.data || err.response));
//
// export const getCSPRBalance = (data) => axios.post(`${AUTH_SERVER_URL}/api/profile/balance`, data, getPrivateHeaders())
//   .then(({ data }) => data)
//   .catch((err) => Promise.reject(err.response?.data || err.response));

export const getAccount = (id, header) => axios.get(`${APP_API_GATEWAY}/accounts/${id}`, header)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response?.data || err.response));

export const updateAccount = (id, data, headers) => axios.put(`${APP_API_GATEWAY}/accounts/${id}`, data, headers)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response?.data || err.response));

export const createAccount = (id, data, headers) => axios.post(`${APP_API_GATEWAY}/accounts/${id}`, data, headers)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response?.data || err.response));

export const uploadFile = (file, data, headers) => axios.put(`${CONTENT_API_GATEWAY}/${CONTENT_BUCKET}/${file}`, data, headers)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response?.data || err.response));

export const getNodes = (chain) => axios.get(`${APP_API_GATEWAY}/nodes/${chain}`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response?.data || err.response));
// {
//   method: 'put',
//   url: `https://lyqog6qkbi.execute-api.eu-central-1.amazonaws.com/v1/metacask-userprofiles/${id}.png`,
//   headers: {
//     'Content-Type': 'image/png'
//   },
//   data : data
// })
//   .then(function (response) {
//     return JSON.stringify(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return Promise.reject(error);
//   });
