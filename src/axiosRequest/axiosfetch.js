import {useState,useEffect} from 'react'
import axios from 'axios'

const Axiosfetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError ] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setLoading(true)
            try {
                const response = await axios.get(url,{
                    cancelToken: source.token
                });
                if (isMounted){
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if(isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            } finally{
                isMounted && setLoading(false)
            }
        }
        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            source.cancel()
        }
        return cleanUp;
    },[dataUrl])

    return { data, fetchError, loading }
}

export default Axiosfetch
