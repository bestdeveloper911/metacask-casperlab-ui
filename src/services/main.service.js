import config from 'utils/config';
import httpService from './http.service';

const installAccessToken = () => httpService
  .post(`${config.baseUrl}/app/installations/${config.clientId}/access_tokens`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const getAllRepositories = (org, page) => httpService
  .get(`${config.baseUrl}/orgs/${org}/repos?per_page=100&page=${page}`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const getAllContributors = (org, repo, page) => httpService
  .get(`${config.baseUrl}/repos/${org}/${repo}/contributors?per_page=100&page=${page}`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

export default {
  installAccessToken,
  getAllRepositories,
  getAllContributors,
};
