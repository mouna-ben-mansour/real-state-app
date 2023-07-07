import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
const { data } = await axios.get((url),{
    headers: {
        'X-RapidAPI-Key': '1f7945530emsh9ec411285084075p1734bajsn1c58c8008f45',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
})
return data;
}