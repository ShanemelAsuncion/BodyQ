import React from 'react'
import Card from '../../components/Card/Card.jsx'
import { LocalFireDepartment, DirectionsRun, LocalDining } from '@mui/icons-material';
import "./DashboardRecap.scss"
import Avatar from '@mui/material/Avatar';

function DashboardRecap() {
    //mockdata for now
    const username = "Shane";
    let stats = {
        energyBurned: 2000,
        steps: 9324,
        caloriesConsumed: 1645,
    }

  return (
    <div className='recap'>
        <div className='recap-heading' >
                    <Avatar alt={username} src="/static/images/avatar/1.jpg" />
                    <h3 className = 'dashboard_details-user'>Welcome back {username}!</h3>
        </div>
        <div className='recap-details'></div>
            <ul className='recap-list'>
                <li className='recap-item'> 
                <Card width='200px' height='150px'>
                        <LocalFireDepartment  sx={{ fontSize: 60 }}/> 
                        <p className='card-title'>Energy burned:</p>
                        <p>{stats.energyBurned} kcal</p>
                    </Card>
                </li>
                <li className='recap-item'>
                <Card width='200px' height='150px'>
                        <DirectionsRun sx={{ fontSize: 60 }}/>
                        <p className='card-title'>Steps:</p>
                        <p>{stats.steps} kcal</p>
                    </Card>
                </li>
                <li className='recap-item'>
                    <Card width='200px' height='150px'>
                        <LocalDining sx={{ fontSize: 60 }} /> 
                        <p className='card-title'>Calories consumed:</p>
                        <p>{stats.caloriesConsumed} kcal</p>
                    </Card>
                </li>
            </ul>
    </div>
  )
}

export default DashboardRecap