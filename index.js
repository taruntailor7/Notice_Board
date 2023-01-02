import express from 'express';
import cors from 'cors';
import connection from './config/db.js';
import userRouter from './routes/users.routes.js';
import postRouter from './routes/notices.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Notice Board");
})

app.use("/auth", userRouter);
app.use("/notices", postRouter);

const PORT = 3050;
app.listen(PORT, () => {
    try {
        connection();
        console.log(`Server listening on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})