import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../houk/useAxiosSecure';

const Request = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosSecure.get(`/requests/${id}`);
                setData(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, axiosSecure]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No Data Found</div>;
    }

    return (
        <div>
            hi

            {/* RENDER DATA */}
            <div>
                <p>Recipient: {data.recipient_name}</p>
                <p>Blood Group: {data.blood_group}</p>
                <p>Hospital: {data.hospital_name}</p>
                <p>District: {data.recipient_district}</p>
                <p>Upazila: {data.recipient_upazila}</p>
                <p>Status: {data.donation_status}</p>
                <p>Date: {new Date(data.createdAt).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Request;