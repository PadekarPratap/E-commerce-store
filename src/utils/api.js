import axios from "axios"


export const BASE_URL = 'https://orca-app-jhg4l.ondigitalocean.app/api/'
export const IMAGE_URL = `http://rjtmobile.com/grocery/images/`

export const fetchAPIData = async (url, params) =>{
    try {
        const res = await axios.get(BASE_URL + url)
        return res
    } catch (err) {
        console.log(err.message)
        return err
    }
}