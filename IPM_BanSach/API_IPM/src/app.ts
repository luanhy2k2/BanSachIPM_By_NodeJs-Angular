import express, { Request, Response } from 'express';
import router from './routes';
import cors from 'cors';
import bodyParser from "body-parser";
import multer from 'multer';
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/DELL E7450/OneDrive/Máy tính/html/React-App/bansach/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const filename = req.file;

  res.status(200).json({ filename });
});

app.use('/api', router);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
