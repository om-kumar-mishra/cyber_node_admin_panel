// const { db,admin } = require("../utils/admin");

// // const admin=require('firebase-admin');
// // var serviceAccount = require('../admin.json');
// // admin.initializeApp({
// // credential: admin.credential.cert(serviceAccount),
// // databaseURL: "https://my-firebase-project-3a85c.firebaseio.com",
// // authDomain: "my-firebase-project-3a85c.firebaseapp.com",
// // });

// // var db = admin.database();
// // var userRef=db.ref("users");

// // exports.books = async (req, res) => {
// //     const booksRef = db.collection('user');
// //     try {
// //         booksRef.get().then((snapshot) => {
// //             const data = snapshot.docs.map((doc) => ({
// //                 id: doc.id,
// //                 ...doc.data(),
// //             }));
// //             console.log(data);
// //             return res.status(201).json(data);
// //         })
// //     } catch (error) {
// //         return res
// //             .status(500)
// //             .json({ general: "Something went wrong, please try again" });
// //     }
// // };



// exports.poatBooks = async (req, res) => {
//     console.log("auth====",admin.auth().createUser())
//     // var authData = db.getAuth();
//     // const user = await admin.auth().userinfo({
//     //     email:"om@gmail.com" ,
//     //     name:"75gufy",
//     //     image: "om.jpg",
//     //   })

// // if (authData) {
// //   console.log("Authenticated user with uid:", authData.uid);
// // }

//     // db.collection("user").doc("userinfo").set({
//     //     name: "abhishek1 mishra",
//     //     email: "abhi12@gmail.com",
//     //     image: "aaom.jpg"
//     // })
//     // .then(() => {
//     //     console.log("Document successfully written!");
//     // })
//     // .catch((error) => {
//     //     console.error("Error writing document: ", error);
//     // });
//     // let obj = {
//     //     roll :1,
//     //      email:'Abhishek@gmail.com',
//     //      name:'Abhi'
//     // };
//     // var oneUser=userRef.child(obj.roll);
//     // oneUser.update(obj,(err)=>{
//     // if(err){
//     // res.status(300).json({"msg":"Something went wrong","error":err});
//     // }
//     // else{
//     // res.status(200).json({"msg":"user created sucessfully"});
//     // }
//     // })
// };

