const multer = require("multer");

const storage = multer.diskStorage({
  destination: "../Public/Uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;