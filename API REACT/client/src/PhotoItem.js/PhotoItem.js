import cl from "./photoItem.module.css";

function PhotoItem(props) {
  return (
    <div className={cl.photo}>
      <h1>{props.id}</h1>
      <h2>{props.title}</h2>
      <img style={{ width: 400 }} src={props.url} />
    </div>
  );
}

export default PhotoItem;
