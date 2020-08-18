const { v4: uuidv4 } = require('uuid');
const send_item = require("../functions/send_item")
const {get_item, item_exists} = require("../functions/get_item")

const subscription_duration_months = 6
const subscription_duration_ms = subscription_duration_months * 2628000

class Subscription {
  constructor(start_date_ms, guid=0) {
    this.start_date_ms = start_date_ms
    this.guid = guid
    if (guid === 0) {
      this.guid = uuidv4()
    }
  }
  static from_firebase(data) {
    // Returns an instance of this class created using data fetched from firebase
    return new Subscription(data["start_date_ms"], data["guid"])
  }
  get_start_date_obj() {
    return new Date(this.start_date_ms)
  }
  is_valid() {
    let now = Date.now()
    let end_date = this.start_date_ms + subscription_duration_ms
    return now < end_date
  }
}

module.exports = Subscription
