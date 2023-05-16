import React, { useEffect, useState } from "react";

function Images(props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  async function getPhotos() {
    const response = await fetch(
      "https://api.unsplash.com/photos/?client_id=wepuRCPJGdk1dBeQM7msS8osfuId-41cjfESOfFKYhM"
    );
    const data = await response.json();

    // data.forEach((photo) => console.log(photo));
    setPhotos(data);
  }

  const imgTags = photos.map((photo) => {
    return <img width={400} src={photo.urls.small} />;
  });

  return <div id="hello">{imgTags}</div>;
}

export default Images;
