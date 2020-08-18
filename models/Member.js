const send_item = require("../functions/send_item")
const {get_item, item_exists} = require("../functions/get_item")
const remove_item = require("../functions/remove_item")
const get_all = require("../functions/get_all")
const Subscription = require("../models/Subscription")

class Member {
  // note: this guid corresponds to the firebase-generated account guid
  constructor(email, guid, subscription_guid=0) {
    this.email = email;
    this.subscription_guid = subscription_guid
    this.guid = guid
  }
  static from_firebase(data) {
    // Returns an instance of this class created using data fetched from firebase
    return new Member(data["email"], data["guid"], data["subscription_guid"])
  }
  get_subscription_obj() {
    if (this.subscription_guid !== 0) {
      let sub = get_item("subscription", Subscription, this.subscription_guid)
    }
  }
}

module.exports = Member
