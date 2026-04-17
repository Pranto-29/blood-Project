import React from 'react';

const MainDashborad = ({ role }) => {
    return (
        <div>
            {role === 'admin' ? (
                <h1>Admin Dashboard</h1>
            ) : role === 'donnar' ? (
                <h1>Donar Dashboard</h1>
            ) : role === 'volunteer' ? (
                <h1>Volunteer Dashboard</h1>
            ) : (
                <h1>No Role Found</h1>
            )}
        </div>
    );
};

export default MainDashborad;

