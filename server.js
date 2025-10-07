require("dotenv").config()
const multer = require("multer")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const File = require("./models/file")
const fs = require("fs");

const { v2: cloudinary } = require("cloudinary");
cloudinary.config(); 

const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))

const upload = multer({ dest: "uploads" })
const uri = process.env.DATABASE_URL;
const dbName = process.env.DB_NAME;

mongoose.connect(uri , {dbName})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const up = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
      folder: "protected-files",
      use_filename: true,
      unique_filename: false,
    });

    const fileData = {
      path: up.secure_url,              
      originalName: req.file.originalname,
      cloudinaryPublicId: up.public_id, 
    };
    if (req.body.password) {
      fileData.password = await bcrypt.hash(req.body.password, 10);
    }

    const file = await File.create(fileData);
    fs.unlink(req.file.path, () => {}) 

    res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` });
  } catch (e) {
    console.error("Cloudinary upload failed:", e.message);
    res.status(500).send("Upload failed");
  }
})

app.route("/file/:id").get(handleDownload).post(handleDownload)

async function handleDownload(req, res) {
  const file = await File.findById(req.params.id)

  if (!file) {
    return res.status(404).send("File not found")
  }

  if (file.password != null) {
    const sentPassword = req.body && req.body.password  // or: const sentPassword = req.body?.password
    if (!sentPassword) {
      return res.render("password", { id: file.id })
    }

    const match = await bcrypt.compare(sentPassword, file.password)
    if (!match) {
      return res.render("password", { error: true, id: file.id })
    }
  }

  file.downloadCount++
  await file.save()
  console.log("Download count:", file.downloadCount)

  // return res.download(file.path, file.originalName)
  if (file.cloudinaryPublicId) {
    const downloadUrl = cloudinary.url(file.cloudinaryPublicId, {
      resource_type: 'raw',
      flags: 'attachment',
      filename: file.originalName || 'file'
    })
    return res.redirect(downloadUrl);
  }
  return res.redirect(file.path);
}

app.listen(process.env.PORT)