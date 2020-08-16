var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://formagreen-80e62.firebaseio.com"
});

var db = admin.database();
db.ref("test/5").set({
  username: "dummy"
});

