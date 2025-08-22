// Import the required modules
const express = require("express")
const router = express.Router()

const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
const { auth, isStudent } = require("../middlewares/auth")
//const {isInstructor} = require("../middlewares/isInstructor")
//const {isAdminOrInstructor} = require("../middlewares/isAdminOrInstructor")
router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/verifyPayment",auth, isStudent, verifyPayment)
router.post("/sendPaymentSuccessEmail", auth, isStudent, sendPaymentSuccessEmail);

module.exports = router