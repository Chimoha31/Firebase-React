import "./App.css";
import React, { useState, useEffect } from "react";
import db from "./components/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function App() {
  // dbの内容をpostの中にどんどん入れていく為にuseState()で箱を用意する。
  const [posts, setPosts] = useState([]);
  // いつデータを取ってきたい？→リロードする度に持ってきたい。[]を設定することでマウント時にのみuseEffectの中の関数()が実行される。
  useEffect(() => {
    // Cloud Firestoreにデータが追加されたことをすばやく確認し、"get" メソッドを使用してコレクション全体を取得する。
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      //  console.log(snapShot.docs.map((doc) => ({...doc.data()})));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    // リアルタイムでデータを取得する↓
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({...doc.data()})))
    })
  }, []);

  return (
    <div className="App">
      <div>
        {posts.map((post) => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
