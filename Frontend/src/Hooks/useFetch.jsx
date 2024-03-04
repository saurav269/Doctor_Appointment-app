import React, { useEffect, useState } from 'react'
import { token } from '../config';
import { toast } from 'react-toastify';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
         try{
            const res = await fetch(url, {
                headers :{Authorization : `Bearer ${token}`}
            })
            const result = await res.json()
            if(!res.ok){
                 throw new Error(result.message + "🙁")
            }
                 setData(result.data)
                 setLoading(false)
         }catch(err){
            // console.log(err)
            setLoading(false)
            setError(err.message)
         }
        }
        fetchData()
    },[url])
  return {
    data, error, loading
  }
}

export default useFetch
