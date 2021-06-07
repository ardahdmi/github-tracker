import axios from 'axios';
import { createContext, useEffect, useReducer, useState } from 'react';
import mockFollowers from './mockData.js/mockFollowers';
import mockRepos from './mockData.js/mockRepos';
import mockUser from './mockData.js/mockUser';

const rootUrl = 'http://api.github.com';

const StateContext = createContext();
const DispatchContext = createContext();

function githubReducer(state, action) {
  switch (action.type) {
    case 'SEARCH_USER':
      state.error = { ...state.error, show: false };
      state.isLoading = true;
      return !action.payload.error
        ? {
            ...state,
            user: action.payload.user,
            followers: action.payload.followers.data,
            repos: action.payload.repos.data,
            isLoading: false,
          }
        : { ...state, error: action.payload.error, isLoading: false };

    default:
      return state;
  }
}

const searchGithubUser = async (user) => {
  const url = `${rootUrl}/users/${user}`;
  const response = await axios(url).catch((err) => console.log(err));
  if (response) {
    const { login, followers_url } = response.data;
    //repos
    const repos = await axios(`${rootUrl}/users/${login}/repos?per_page=100`);
    // followers
    const followers = await axios(`${followers_url}?per_page=100`);
    return { user: response.data, followers, repos };
  } else {
    return { error: { show: true, msg: 'Username not found' } };
  }
};

const initialState = {
  user: mockUser,
  followers: mockFollowers,
  repos: mockRepos,
  error: { show: false, msg: 'Not Found' },
  searchGithubUser,
  isLoading: false,
};

const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const [rateLimit, setRateLimit] = useState(0);
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        if (remaining === 0) {
          //throw error
        }
        setRateLimit(remaining);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(checkRequests, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={{ state, rateLimit }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { StateContext, DispatchContext, GithubProvider };
