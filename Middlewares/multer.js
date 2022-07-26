const multer = require("multer");
const upload = multer({ dest: "../Public/Uploads" });

// const storage = multer.diskStorage({
//   destination: "../Public/Uploads",
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });
module.exports = { multer };
