const { v4: uuidv4 } = require('uuid');
const send_item = require("../functions/send_item")
const {get_item, item_exists} = require("../functions/get_item")

const green_area_types = {
  SCHOOL: "School",
  UNIVERSITY: "University",
  TRAINING_SCHOOL: "Training School",
  TRAINING_CENTER: "Training Center"
}

class GreenArea {
  constructor(name, type=green_area_types.SCHOOL, coordinates="", guid=0) {
    this.name = name
    this.type = type
    this.coordinates = coordinates
    this.guid = guid
    if (guid === 0) {
      this.guid = uuidv4()
    }
  }
  static from_firebase(data) {
    // Returns an instance of this class created using data fetched from firebase
    return new GreenArea(data["name"], data["type"], data["coordinates"], data["guid"])
  }
}

module.exports = GreenArea
