let {get_item, item_exists} = require("../functions/get_item")
let send_item = require("../functions/send_item")
let firebase = require("firebase/app");
const Member = require("../models/Member")

let sign_up = function(email, password) {
  // Signs up a new user and signs him in too
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}
let init_member_if_necessary = function(email, guid) {
  // To call when a user signs up
  // Creates a new member entry in db if it's not present
  let on_user_exists_in_db = function(){
    console.log("Member exists in db")
  }
  let on_user_absent_from_db = function(){
    console.log("Sending empty member")
    let member_instance = new Member(email, guid)
    send_item("member", member_instance)
  }
  item_exists("member", Member, guid, on_user_exists_in_db, on_user_absent_from_db)
}

let sign_in = function(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    // if successful, user is now accessible at firebase.auth().currentUser
  });
}

let get_current_user = function(on_success=function(member_obj){}) {
  let user = firebase.auth().currentUser;
  if (user) {
    get_item("member", Member, user.uid, on_success)
  } else {
    console.log("No user signed in")
  }
}

let init_sign_event = function(firebase) {
  // Sets what happens when a user signs in or out (or just got signed up)
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("User " + user.email + " is now signed in")
      init_member_if_necessary(user.email, user.uid)  // will send a Member instance if user just signed up
      let on_member_got = function(member) {
        console.log(member)
      }
      get_item("member", Member, user.uid, on_member_got)
    } else {
      console.log("User is now signed out")
    }
  });
}
init_sign_event(firebase)

module.exports = {sign_up, sign_in, get_current_user}
