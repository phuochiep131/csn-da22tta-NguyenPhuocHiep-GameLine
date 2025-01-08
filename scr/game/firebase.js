import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import {
  getDatabase,
  set,
  get,
  ref,
  onValue,
  child,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import * as lib from "./spt.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5Q2J2oFVVM7zIsfj8vOUvm3CxHu3t_DI",
  authDomain: "gamelines-7b5fa.firebaseapp.com",
  databaseURL: "https://gamelines-7b5fa-default-rtdb.firebaseio.com",
  projectId: "gamelines-7b5fa",
  storageBucket: "gamelines-7b5fa.firebasestorage.app",
  messagingSenderId: "993387734536",
  appId: "1:993387734536:web:669eb8c14a9b967731d3bd",
  measurementId: "G-52C7GPB66Q",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function writeUserData(userID, name, point) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userID);

  set(reference, {
    Name: name,
    Point: point,
  });
}

export function get_Point_ByID(userID) {
  const db = getDatabase();
  const userRef = ref(db);

  return get(child(userRef, "users/" + userID))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val().Point;
      } 
    })
}

// get_Point_ByID("Hiep4").then((point) => {
//   console.log(point);
// });

export function getUserData() {
  const db = getDatabase();
  const postsRef = ref(db, "users");

  onValue(postsRef, (snapshot) => {
    const data = snapshot.val();
    let usersArray = Object.keys(data).map((key) => {
      return { id: key, ...data[key] };
    });

    usersArray.sort((a, b) => b.Point - a.Point);
    WriteScore("highscore", usersArray);
  });
}

export function WriteScore(idtag, plr) {
  document.getElementById(idtag).innerHTML = "";
  let scoreText = "";
  
  for (let i = 0; i < 5; i++) {
    scoreText +=
      "Hạng " + (i + 1) + ": " + plr[i].Name + " " + plr[i].Point + "<br>";
  }
  for (let i = 0; i < plr.length; i++) {
    if(plr[i].id === lib.getID()){
      scoreText += ("Hạng của bạn là: " + (i+1))
    }
  }
  document.getElementById(idtag).innerHTML = scoreText;
}

export function AutoRandomID() {
  return "ID" + Math.floor(Math.random() * 500);
}

// document.getElementById("reset-btn").addEventListener("click", function () {
//   writeUserData(useridgame, GetName(), GetPoint());
// });

// document.getElementById("Board").addEventListener("click", function () {
//   writeUserData(useridgame, GetName(), GetPoint());
//   getUserData();
// });

//writeUserData("Hiep6", "Hiệp", 100000000)
getUserData();

