import axios from "axios";

const key = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_BASE_URL;

export const apiCoins = async () => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': key,
        },
    };
    try {
        const response = await axios.get(url + '/coins', options)
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
}