import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {
      const authToken = localStorage.getItem("authToken");

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`,

                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    }, {
                    withCredentials: true,
                });
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                // console.log(error);
                console.error("Admin Jobs Error:", error.message);
                if (axios.isCancel(error)) {
                    console.log("Request cancelled");
                }
            }
        }
        fetchAllAdminJobs();
    }, [])
}

export default useGetAllAdminJobs