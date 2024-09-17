import React from 'react';
import './Dashboard.scss'
import DashboardRecap from '../../components/DashboardRecap/DashboardRecap.jsx';
import DashboardGoals from '../../components/DashboardGoals/DashboardGoals.jsx';



const Dashboard = () => {
    
    const username = "Shane";
    //mockdata for now
    

    return (
        <div className='dashboard'>
            <h1 className='dashboard__header'> Dashboard </h1>
            <div className='dashboard__details'>
                <DashboardRecap />
            </div>
            <div className='dashboard__todo'>
                <h2 className='dashboard__todo-heading'>
                    Goals for today:
                </h2>
                <DashboardGoals />
            </div>
        </div>
    );
};


export default Dashboard;