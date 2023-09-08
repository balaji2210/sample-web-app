const Card = ({ title = "", description = "", image = "" }) => {
  return (
    <div className="card" style={{ width: " 18rem", cursor: "pointer" }}>
      <img
        src={image}
        width="200px"
        height="200px"
        className="card-img-top"
        alt="image"
      />
      <div className="card-body">
        <p className="card-text fs-5 ">{title?.toUpperCase()}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
