let get_db = require("../functions/get_db")
let db = get_db()

let default_on_success = function(objects) {
  console.log("Retrieved all")
  for (const obj of objects) {
    console.log(obj)
  }
}
let get_all = function get_from_firebase(class_name, class_, on_success=default_on_success) {
  // Returns an array containing all items of class_ type as instances
  db.ref(class_name).once("value", function(data){
    let all_items = data.val()
    let objects = []
    for (const [guid, attributes] of Object.entries(all_items)) {
      let obj = class_.from_firebase(attributes)
      objects.push(obj)
    }
    on_success(objects)
  })
}
module.exports = get_all

