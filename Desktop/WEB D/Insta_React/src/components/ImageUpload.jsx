// import { Button, TextField } from "@material-ui/core";

// import React, { useState } from "react";
// import { db, storage } from "../firebase";
// import firebase from "firebase";

// function ImageUpload(props) {
//   console.log(props.username);
//   const [caption, setcaption] = useState("");
//   const [Upload, setUpload] = useState("");
//   const [progress, setprogress] = useState(0);
//   function handelChange(event) {
//     setcaption(event.target.value);
//   }
//   function handelUpload(event) {
//     return setUpload(event.target.files[0]);
//   }
//   function CreatePost() {
    // const uploadTask = storage.ref(`images/${Upload.name}`).put(Upload);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setprogress(progress);
//       },
//       (error) => {
//         alert(error.message);
//       },
//       () => {
//         storage
//           .ref("images")
//           .child(Upload.name)
//           .getDownloadURL()
//           .then((url) => {
//             db.collection("Posts").add({
//               user: props.username,
//               timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//               caption: caption,
//               image: url,
//             });
//             setprogress(0);
//             setUpload("");
//             setcaption("");
//           });
//         props.updateUpload(false);
//       }
//     );
//   }
//   return (
//     <div className="Uploader flex">
//       <progress variant="determinate" value={progress} />
//       <TextField type="text" className="max-width" value={props.username} />
//       <TextField
//         id="standard-basic"
//         label="Add Caption (max:500 words)"
//         type="text"
//         name="caption"
//         placeholder="Add Caption"
//         className="max-width"
//         value={caption}
//         onChange={handelChange}
//       />
//       <input type="file" onChange={handelUpload} required />
//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         onClick={CreatePost}
//       >
//         Upload
//       </Button>
//     </div>
//   );
// }

// export default ImageUpload;

// ImageUpload.jsx
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { db, storage } from "../firebase";
import {serverTimestamp} from "firebase/firestore";

function ImageUpload(props) {
  console.log(props.username);
  const [caption, setCaption] = useState("");
  const [upload, setUpload] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    setCaption(event.target.value);
  };

  const handleUpload = (event) => {
    if (event.target.files[0]) {
      setUpload(event.target.files[0]);
    }
  };

  const createPost = async () => {
    if (upload) {
      const storageRef = storage.ref(`images/${upload.name}`);
      const uploadTask = storageRef.put(upload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        },
        (error) => {
          alert(error.message);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          try {
            const docRef = await db.collection("Posts").add({
              user: props.username,
              // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              timestamp: serverTimestamp(),
              caption: caption,
              image: url,
            });
            console.log("Document written with ID: ", docRef.id);
            setProgress(0);
            setUpload(null);
            setCaption("");
            props.updateUpload(false);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
      );
    }
  };

  return (
    <div className="Uploader flex">
      <progress variant="determinate" value={progress} max="100" />
      <TextField type="text" className="max-width" value={props.username} readOnly />
      <TextField
        id="standard-basic"
        label="Add Caption (max: 500 words)"
        type="text"
        name="caption"
        placeholder="Add Caption"
        className="max-width"
        value={caption}
        onChange={handleChange}
      />
      <input type="file" onChange={handleUpload} required />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={createPost}
      >
        Upload
      </Button>
    </div>
  );
}

export default ImageUpload;
