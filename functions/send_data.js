var admin = require("firebase-admin");

// Récupérer la clé privée du compte service de firebase (Accès dans les paramètres du projet)
// renomer la clé en serviceAccountKey.json
// déplacer la clé à la racine du projet MyFormaGreenProject
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

