let {get_admin, get_db} = require("../functions/get_db")
let db = get_db()

let default_on_success = function() {
  console.log("Data sent")
}
let default_on_failure = function(error) {
  console.log("Data send failure: ")
  console.log(error)
}
let send_item = function send_item(class_name, class_instance, on_success=default_on_success, on_failure=default_on_failure) {
  // Sends a dictionary version of an instance to firebase
  // Can be used to create a new dictionary or update an existing one
  db.ref(class_name + "/" + class_instance.guid).set(
    JSON.parse(JSON.stringify(class_instance)),
    function(error) {
      if (error) {
        on_failure(error)
      } else {
        on_success()
      }
    }
  )
}
module.exports = send_item

