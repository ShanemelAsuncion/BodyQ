import express from "express";
import axios from 'axios';
import "dotenv/config";

const router = express.Router();

// Route to fetch workouts data based on the muscle query
router.get('/muscle/:q', async (req, res) => {
    const { q } = req.params; // Extract query parameter from URL
    try {
        const accessToken = process.env.API_NINJA_TOKEN; // Use access token from .env
    
        const headers = {
          "X-Api-Key": `${accessToken}`,
        };
    
        // Fetch exercise data from API Ninjas
        const exercisesResponse = await axios.get(
          `https://api.api-ninjas.com/v1/exercises?muscle=${q}`,
          { headers } // Pass the headers in the request
        );
    
        // Log the response data for debugging
        console.log(exercisesResponse.data);
    
        // Send only the data (not the entire response object) as JSON
        res.json(exercisesResponse.data);
        
    } catch (error) {
      console.error('Error fetching API Ninja exercises data:', error.message);
      res.status(500).json({ error: 'Failed to fetch API Ninja exercises data' });
    }
});


// Route to fetch workouts data based on the muscle query
router.get('/type/:q', async (req, res) => {
    const { q } = req.params; // Extract query parameter from URL
    try {
        const accessToken = process.env.API_NINJA_TOKEN; // Use access token from .env
    
        const headers = {
          "X-Api-Key": `${accessToken}`,
        };
    
        // Fetch exercise data from API Ninjas
        const exercisesResponse = await axios.get(
          `https://api.api-ninjas.com/v1/exercises?type=${q}`,
          { headers } // Pass the headers in the request
        );
    
        // Log the response data for debugging
        console.log(exercisesResponse.data);
    
        // Send only the data (not the entire response object) as JSON
        res.json(exercisesResponse.data);
        
    } catch (error) {
      console.error('Error fetching API Ninja exercises data:', error.message);
      res.status(500).json({ error: 'Failed to fetch API Ninja exercises data' });
    }
});
// Route to fetch workouts data based on the muscle query
router.get('/difficulty/:q', async (req, res) => {
    const { q } = req.params; // Extract query parameter from URL
    try {
        const accessToken = process.env.API_NINJA_TOKEN; // Use access token from .env
    
        const headers = {
          "X-Api-Key": `${accessToken}`,
        };
    
        // Fetch exercise data from API Ninjas
        const exercisesResponse = await axios.get(
          `https://api.api-ninjas.com/v1/exercises?difficulty=${q}`,
          { headers } // Pass the headers in the request
        );
    
        // Log the response data for debugging
        console.log(exercisesResponse.data);
    
        // Send only the data (not the entire response object) as JSON
        res.json(exercisesResponse.data);
        
    } catch (error) {
      console.error('Error fetching API Ninja exercises data:', error.message);
      res.status(500).json({ error: 'Failed to fetch API Ninja exercises data' });
    }
});


export default router;
