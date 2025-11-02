import axios from "../apis/axiosInstance";
import { useCallback, useState } from "react";

const usePostAPIData = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<Error|null>(null);
    const [loading, setLoading] = useState(false);

    const PostData = useCallback(async (payload: any) => {
        setLoading(true);
        setError(null);
        try {
            
            const resData:any = await axios.post(url, payload);
            console.log(resData.data);
            setData(resData.data);
            return resData.data;
        } catch (err:any) {
            // ensure err is an Error before assigning to state
            setError(err instanceof Error ? err : new Error(String(err)));
            console.error(err);
            setError(err.response.data.message);
        }
        finally {
        setLoading(false);
      }
    }, [url])

    return {data,error,loading,PostData}
}

export default usePostAPIData;