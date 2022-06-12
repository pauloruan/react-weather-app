import axios from 'axios';

const handleAPI = axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '3014fae073msh0e1512ac676c0e6p148bc0jsn32d8a77afb81',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
});

export default async function getAPI(city: string) {
  const result = await handleAPI.get(`current.json?q=${city}`);
  return result;
}
