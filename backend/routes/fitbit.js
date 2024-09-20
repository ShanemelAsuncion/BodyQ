import express from "express";
import axios from 'axios';
import "dotenv/config";

const router = express.Router();

// Route to fetch Fitbit data
router.get('/:dateInput', async (req, res) => {
    const { dateInput } = req.params;  
  try {
    const accessToken = process.env.FITBIT_ACCESS_TOKEN; // Use access token from .env

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    // Fetch activity data
    const activityResponse = await axios.get(
      `https://api.fitbit.com/1/user/-/activities/date/${dateInput}.json`,
      { headers }
    );
    console.log(activityResponse)

    // Fetch sleep data
    const sleepResponse = await axios.get(
      `https://api.fitbit.com/1.2/user/-/sleep/date/${dateInput}.json`,
      { headers }
    );

    // Extract required data
    const summary = activityResponse.data.summary;
    const goals = activityResponse.data.goals;
    const sleep = sleepResponse.data.summary.totalMinutesAsleep;
    

     // Return the data as an array of named objects
     const fitbitData = [
        { "summary": summary },
        { "goals": goals },
        { "sleep": sleep }
      ];
    // Send response
    res.json(fitbitData);
  } catch (error) {
    console.error('Error fetching Fitbit data:', error.message);
    res.status(500).json({ error: 'Failed to fetch Fitbit data' });
  }
});

export default router;
