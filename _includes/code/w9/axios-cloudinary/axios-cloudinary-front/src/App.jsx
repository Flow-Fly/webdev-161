import { useState } from 'react';
import './App.css';

function App() {
  const [imageFile, setImageFile] = useState("");
  const [imageURL, setImageURL] = useState("");


  console.log(imageFile);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", imageFile);

    const { data: { image } } = await axios.post("http://localhost:5005/api/images", formData);
    setImageURL(image);
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={(e) => setImageFile(e.target.files[0])} />
      <input type="submit" value="Upload" />
    </form>

    <img src={imageURL} alt="" />
  </div>;
}

export default App;
