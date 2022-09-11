import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = Number(process.env.PORT) || 4001;

const server = express();

server.use(express.json());
server.use(cors());

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});