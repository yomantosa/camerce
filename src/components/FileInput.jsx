import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";

export const image = {
    name: ''
};

const FileInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "product");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dehwpknzj/image/upload",
          formData
        )
        .then((respond) => {
          console.log(respond.data);
          image.name = respond.data.secure_url;
          console.log(image);
        });
      console.log(selectedImage);
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span" > 
          Upload Image
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </Box>
      )}
        
    </>
  );
};

export default FileInput;