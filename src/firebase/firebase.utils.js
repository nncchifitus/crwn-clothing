import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPVgMQgYQ5uqsBKxheS8iLEaKJ3QpgOLg",
  authDomain: "crwn-db-420eb.firebaseapp.com",
  projectId: "crwn-db-420eb",
  storageBucket: "crwn-db-420eb.appspot.com",
  messagingSenderId: "56711184907",
  appId: "1:56711184907:web:383b1efdeda37059acbd0e",
  measurementId: "G-2RNV3GS9LK",
};

// Khởi tạo app với cấu hình của project.
firebase.initializeApp(config);

// Export xác thực với firebase
export const auth = firebase.auth();

// Eport cơ sở dữ liệu của firebase
export const firestore = firebase.firestore();

// Cung cấp xác thực bằng tài khoảng google
const provider = new firebase.auth.GoogleAuthProvider();

// Cài đặt phương thức xác thực bằng google
provider.setCustomParameters({ prompt: "select_account" });

// Đặt cửa sổ xác thực
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
