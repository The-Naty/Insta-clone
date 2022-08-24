const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/images",

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        req.user._id +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
