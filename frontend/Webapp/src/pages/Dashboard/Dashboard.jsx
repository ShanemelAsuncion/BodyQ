import React from 'react';
import './Dashboard.scss';
import DashboardGoals from '../../components/DashboardGoals/DashboardGoals.jsx'
import DashboardCalories from '../../components/DashboardCalories/DashboardCalories.jsx';
import DashboardMeasurements from '../../components/DashboardMeasurements/DashboardMeasurements.jsx';
import DashboardPlan from '../../components/DashboardPlan/DashboardPlan';
import DashboardExplore from '../../components/DashboardExplore/DashboardExplore.jsx';
import DashboardRecap from '../../components/DashboardRecap/DashboardRecap.jsx'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Dashboard = () => {
    
    const username = "Shane";
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Function to render the correct component based on the active tab
    const renderTabPanel = () => {
        switch (value) {
            case 0:
                return <DashboardGoals />;
            case 1:
                return <DashboardExplore />;
            case 2:
                return <DashboardCalories />;
            case 3:
                return <DashboardMeasurements />;
            case 4:
                return <DashboardPlan />;
            default:
                return null;
        }
    };

    return (
        <div className='dashboard'>
            <h1 className='dashboard__header'> Dashboard </h1>
            <div className='dashboard__details'>
                <DashboardRecap />
            </div>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Goals" />
                <Tab label="Explore" />
                <Tab label="Calories" />
                <Tab label="Measurements" />
                <Tab label="Plan" />
            </Tabs>
            {/* Render the correct tab panel based on the selected tab */}
            <div className='dashboard__content'>
                {renderTabPanel()}
            </div>
        </div>
    );
};

export default Dashboard;
