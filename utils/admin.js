var admin = require("firebase-admin");

var serviceAccount = require("/cyber_security_project/cybersecuritynode/my-firebase-project-3a85c-firebase-adminsdk-1gay4-867e31f549.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = { admin, db };


