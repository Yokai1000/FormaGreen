let get_db = require("../functions/get_db")
let db = get_db()

let remove_item = function remove(class_name, guid) {
  // Removes the specified entry from the db
  db.ref(class_name + "/" + guid).remove()
}
module.exports = remove_item

