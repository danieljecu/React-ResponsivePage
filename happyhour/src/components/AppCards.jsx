import React from "react";
import "./AppsCards.css";
const AppCardsStatus = {
  position: "absolute",
  zIndex: 1,
  marginLeft: 5,

  marginTop: 5,
  color: "white",
  borderRadius: 8,
  padding: 3,
  fontFamily: "Roboto"
};
const AppCard = props => {
  const getStar = rating => {
    return [...Array(5)]
      .map(_ => 0)
      .reduce((pre, now, index) => {
        if (index < Math.floor(rating)) {
          return [
            ...pre,
            <img
              key={index}
              id="AppCards-star"
              src={"../assets/single-star-gold.svg"}
              alt="Star"
            />
          ];
        } else {
          return [
            ...pre,
            <img
              key={index}
              id="AppCards-star"
              src={"../assets/single-star-grey.svg"}
              alt="Logo"
            />
          ];
        }
      }, []);
  };
  return (
    <React.Fragment>
      <div id="AppCards-wrapper">
        <div id="AppCards-container">
          <div>
            <span
              className="AppCards-pub"
              style={{
                backgroundColor: props.data.published
                  ? "rgba(80,189,156,0.7)"
                  : "rgba(226,81,105,0.7)",
                ...AppCardsStatus
              }}
            >
              {props.data.published ? "Published" : "Unpublished"}
            </span>
          </div>
          <div id="AppCards-image-container">
            <img
              id="AppCards-image"
              src={"../assets/image-placement.svg"}
              alt="Logo"
            />
          </div>{" "}
          <h2 id="AppsCard-title">{props.data.title}</h2>
          <p id="AppsCard-auth">{props.data.user}</p>
          <div id="AppCards-star-container">
            {getStar(props.data.rating)}
            <span>{props.data.rating ? props.data.rating : "No review"}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AppCard;
