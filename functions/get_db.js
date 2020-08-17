let init_db = function() {
  let admin = require("firebase-admin");

  // Récupérer la clé privée du compte service de firebase (Accès dans les paramètres du projet)
  // renomer la clé en serviceAccountKey.json
  // déplacer la clé à la racine du projet MyFormaGreenProject
  let serviceAccount = require("../serviceAccountKey.json");

  // Initialize the app with a service account, granting admin privileges
  admin.init
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://formagreen-80e62.firebaseio.com"
  });
  return admin.database()
};

let db = init_db();


let get_db = function() {
  return db;
}

module.exports = get_db;
