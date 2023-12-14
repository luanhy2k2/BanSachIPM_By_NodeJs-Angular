const express_1 = require("express");
const routes_1 = require("./routes/index");
const cors = require('cors');
const multer = (require("multer"));
const app = express_1();
const PORT = 3000;
app.use(cors());
app.use(express_1.json());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "D:/DELL E7450/NodeJs&Angular_IPM/IPM_BanSach/IPM_Angular_UI/src/assets/img/book");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = (multer)({ storage });
app.post("/upload", upload.single("file"), (req, res) => {
    const filename = req.file;
    res.status(200).json({ filename });
});

app.use('/api', routes_1);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
