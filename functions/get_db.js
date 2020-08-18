// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
let firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
let admin = require("firebase-admin");

let init_firebase = function(firebase) {
  // Firebase App (the core Firebase SDK) is always required and
  // must be listed before other Firebase SDKs
  let firebaseConfig = {
    apiKey: "AIzaSyCErlXSiqGpSc7lf-8ySnsqF2JYhvyIy64",
    authDomain: "formagreen-80e62.firebaseapp.com",
    databaseURL: "https://formagreen-80e62.firebaseio.com",
    projectId: "formagreen-80e62",
    storageBucket: "formagreen-80e62.appspot.com",
    messagingSenderId: "1097037393854",
    appId: "1:1097037393854:web:a1532b921434823db753ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  return firebase
}
let init_admin = function(admin) {


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

firebase = init_firebase(firebase)
let db = init_admin(admin);

let get_admin = function() {
  return admin;
}
let get_db = function() {
  return db;
}


module.exports = {get_admin, get_db};
