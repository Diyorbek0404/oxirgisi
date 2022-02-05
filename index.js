const express = require("express");
const mongoose = require("mongoose")
const path = require("path")
const postRouter = require("./routes/post")
const postruRouter = require("./routes/postru")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const xodimRouter = require("./routes/xodim")
const xodimruRouter = require("./routes/xodimru")
const messageRoute = require("./routes/message")
const multer = require("multer")
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect("mongodb+srv://kuldashev:mO5JzQd3x8annG8z@cluster0.r6vwn.mongodb.net/klinika?retryWrites=true&w=majority").then(console.log("connected to mongoDB"))
    .catch(error => {
        console.log(error)
    })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/api/post/", postRouter)
app.use("/api/postru/", postruRouter)
app.use("/api/xodim/", xodimRouter)
app.use("/api/xodimru/", xodimruRouter)
app.use("/api/user/", userRouter)
app.use("/api/auth/", authRouter)
app.use("/api/message/", messageRoute)

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen("5000", () => {
    console.log("Backend ishga tushdi")
})