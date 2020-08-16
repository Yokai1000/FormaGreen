var admin = require("firebase-admin");

module.exports = function send_dummy_data() {
  admin.ref("test/5").set({
    username: "dummy"
  });
};
