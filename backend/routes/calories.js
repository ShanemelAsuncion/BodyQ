import express from "express";
import axios from 'axios';
import "dotenv/config";

const router = express.Router();

// Route to fetch workouts data based on the muscle query
// Not sure if this feature will be included
router.get('/:q', async (req, res) => {
    const { q } = req.params; // Extract query parameter from URL
    try {
        const accessToken = process.env.API_NINJA_TOKEN; // Use access token from .env
    
        const headers = {
          "X-Api-Key": `${accessToken}`,
        };
    
        // Fetch nutrition data from API Ninjas
        const nutritionResponse = await axios.get(
          `https://api.api-ninjas.com/v1/nutrition?query=${q}`,
          { headers }
        );

        console.log(nutritionResponse.data);

        res.json(nutritionResponse.data);
        
    } catch (error) {
      console.error('Error fetching API Ninja nutrition data:', error.message);
      res.status(500).json({ error: 'Failed to fetch API Ninja nutrition data' });
    }
});



export default router;
