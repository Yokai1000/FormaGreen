const send_item = require("../functions/send_item")
const {get_item, item_exists} = require("../functions/get_item")
const remove_item = require("../functions/remove_item")
const get_all = require("../functions/get_all")
const {sign_up, sign_in, get_current_user} = require("../functions/auth")

const Member = require("../models/Member")
const Subscription = require("../models/Subscription")
const GreenArea = require("../models/GreenArea")

// AUTH TESTS
//sign_up("maximebastion@hotmail9.fr", "password")
//sign_in("maximebastion@hotmail3.fr", "password")
//let on_user_got = function(member_obj) {
//  console.log(member_obj)
//}
//get_current_user(on_user_got)

// SUBSCRIPTION TESTS
//let instance = new Subscription(Date.now())
//console.log(instance.is_valid())
//send_item("subscription", instance)
//get_item("subscription", Subscription, "2514cabc-7a05-419a-9a1c-179fdc6b7f5d")
//get_all("subscription", Subscription)

// GREEN AREA TESTS
//let instance = new GreenArea("AGreenArea")
//send_item("green_area", instance)
//get_item("green_area", GreenArea, "8ebfe75b-9926-43ba-9d9c-6c417add601a")
//get_all("green_area", GreenArea)
