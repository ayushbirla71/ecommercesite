import axios from "axios";

let host='http://localhost:3001'

export const fetchDataFromApi = async (obj) => {

 obj.url=`${host}${obj.url}`
  const { data } = await axios(obj);
  return data.data;
};
