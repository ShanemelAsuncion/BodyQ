import express from "express";
import cors from "cors";
import knex from "knex";
import config from "./knexfile.js";
import "dotenv/config";
import fitbitRouter from "./routes/fitbit.js";
import exerciseRouter from "./routes/workouts.js"


// Initialize Knex with the development configuration
const knexDb = knex(config.development);

const app = express();
const { PORT, CORS_ORIGIN } = process.env;

app.use(express.json()); 
app.use(express.static("public")); 
app.use(cors({ origin: CORS_ORIGIN })); 

// Middleware - attach Knex instance to the req object
app.use((req, res, next) => {
    req.knexDb = knexDb;
    next();
});

// Use routes
app.use("/workouts", exerciseRouter); 
// app.use("/measure", measureRoute);
// app.use("/calories", caloriesRoute);
// app.use("/plan", planRoute);
// app.use("/goals", workoutRoute);
app.use('/fitbit', fitbitRouter);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});