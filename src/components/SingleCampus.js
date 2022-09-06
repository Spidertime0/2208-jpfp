import Campus from "./Campus";
import { useState } from "react";
import React from "react";



const SingleCampus = (id) => {

    const [campuses, setCampuses] = useState([])
    useEffect(() => {
        const fetchCampuses = async() => {
            const response = await axios.get('/campuses')
            setCampuses(response.data)
            props.dispatchFetchCampuses()
        }
        fetchCampuses()
    }, []);

    return (
        <div id='campuses'>
            {campuses.map(campus => <Campus campus={campus} key={campus.id} />)}
        </div>
    )
}

export default SingleCampus