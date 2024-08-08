import axios from "axios";

const getReviews = async ()=>{
    const res = axios.get('http://localhost:3000/api/place-details').then((res)=> {
        return res.data.result.reviews
    }).catch((e)=>{return []})
    return res;
}

export {
    getReviews
}