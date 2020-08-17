const { v4: uuidv4 } = require('uuid');
const send_item = require("../functions/send_item")
const get_item = require("../functions/get_item")
const remove_item = require("../functions/remove_item")
const get_all = require("../functions/get_all")
const Subscription = require("../models/Subscription")

class Member {
  constructor(email, password, qr_code, subscription_guid=0, guid=0) {
    this.email = email;
    this.password = password;
    this.qr_code = qr_code;
    this.subscription_guid = subscription_guid
    this.guid = guid
    if (guid === 0) {
      this.guid = uuidv4()
    }
  }
  static from_firebase(data) {
    // Returns an instance of this class created using data fetched from firebase
    return new Member(data["email"], data["password"], data["qr_code"], data["subscription_guid"], data["guid"])
  }
  get_subscription_obj() {
    if (this.subscription_guid !== 0) {
      let sub = get_item("subscription", Subscription, this.subscription_guid)
    }
  }
}


let instance = new Member("maximebastion2@hotmail.fr", "password", "qr_code")
//send_item("member", instance)
//let my_member = get_item("member", Member, "d05b0f34-1b43-40d0-8fbe-cc0004687d99", on_success)
//console.log(my_member)
//remove_item("member", "d05b0f34-1b43-40d0-8fbe-cc0004687d99")
//get_all("member", Member)

module.exports = Member
