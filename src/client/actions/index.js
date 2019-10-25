import axios from 'axios'

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = ()=> async dispatch => {
  const users = await axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users'
  });
  dispatch({
    type: FETCH_USERS,
    payload: users.data
  });
};