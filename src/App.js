import React, { useState ,useEffect} from "react";
import axios from "axios";


export default function App() {
  const [post, setPost] = useState([
    { userId: 2, id: 103, title: "yotube", body: "document" },
    { userId: 6, id: 110, title: "google", body: "document1" },
  ]);
  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    console.log("getData");

    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const newPost = post.map((element, i) => {
    return (
      <div key={i}>
        <p> {element.title}</p>
        <p> {element.body}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>Blog App</h1>
      <p> {newPost}</p>
      <button
        onClick={() => {
          setPost([...post, { userId, id, title, body }]);
        }}
      >
        {" "}
        Click{" "}
      </button>
      <input
        type="Number"
        placeholder="userId"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        type="Number"
        placeholder="id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
    </div>
  );
}
