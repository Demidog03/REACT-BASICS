import PhotoItem from "../PhotoItem.js/PhotoItem";
import photos from "../data/photos";
import cl from "./main.module.css";

function Main() {
  console.log(photos);

  const photosTags = photos.map((photo) => {
    return <PhotoItem id={photo.id} title={photo.title} url={photo.url} />;
  });
  console.log(photosTags);
  return <main>{photosTags}</main>;
}

export default Main;
