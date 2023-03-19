import axios from "axios";

// let host='http://localhost:3001';

let host="https://ecommercesite-g3hwk1a7x-ayushbirla71.vercel.app/"

export const fetchDataFromApi = async (obj) => {

 obj.url=`${host}${obj.url}`
  const { data } = await axios(obj);
  return data.data;
};
