module.exports = function (avatar) {
  if (avatar) {
    return "http://localhost:5000/public/uploads/profilepictures/" + avatar;
  } else {
    return "http://localhost:5000/public/uploads/profilepictures/default.jpg";
  }
};
