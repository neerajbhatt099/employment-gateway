import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_USER_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();
      const authToken = localStorage.getItem("authToken");


    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_USER_END_POINT}/get`,
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    }, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application));
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAppliedJobs();
    }, [])
}
export default useGetAppliedJobs;