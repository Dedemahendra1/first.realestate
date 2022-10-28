import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '3567ff617dmsh9349633c0ba9d33p19f08djsna8a21195aba5',
    },
  });
    
  return data;
}