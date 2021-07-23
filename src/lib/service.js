import axios from 'axios';

const ENDPOINT = "https://jsonplaceholder.typicode.com";

export const getData = async (userId) => {
  try {
    const { data: user } = await axios.get(`${ENDPOINT}/users/${userId}`);
    const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${userId}`);
    const data = {...user,posts};
    return data;
  } 
  catch (e) {
    console.log(e);
  }
}
export default getData;