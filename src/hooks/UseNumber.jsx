import axios from "axios";
import { useState, useEffect } from "react";


const UseNumber = () => {
    
    const [number, setNumber] = useState(0);
    useEffect(() => {
        axios.get('/getNumber')
        .then(res => {
            setNumber(res.data);
        })
    }, [])
    return number;
};

export default UseNumber;