let {get_admin, get_db} = require("../functions/get_db")
let db = get_db()

let default_on_success = function(obj) {
  console.log(obj)
}
let get_item = function get_item(class_name, class_, guid, on_success=default_on_success) {
  // Returns an instance of the class_ with data fetched from firebase at guid
  // Can pass a on_success function called when the data is retrieved as an instance
  db.ref(class_name + "/" + guid).on("value", function(snapshot) {
    let data = snapshot.val()
    let obj =  class_.from_firebase(data)
    on_success(obj)
    return obj
  })
}
let item_exists = function item_exists(class_name, class_, guid, on_exists=function(){}, on_not=function(){}) {
  db.ref(class_name + "/" + guid).once("value").then(function(snapshot){
    let exists = snapshot.exists()
    if (exists) {
      on_exists(snapshot)
    } else {
      on_not(class_name, class_, guid)
    }
  })
}
module.exports = {get_item, item_exists}

