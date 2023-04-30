import React from "react";
import boltIcon from "../assets/images/boltIcon.svg";

const SingleCard = ({ data }) => {
  const updateDate = new Date(data.dateUpdated);
  const time = new Date(data.dateUpdated).toLocaleTimeString();
  console.log(time);
  return (
    <div className="single-card">
      <div className="card-body p-2">
        <h6 className="my-3">
          {data.originType === "automated" ? (
            <img src={boltIcon} alt="" />
          ) : (
            <></>
          )}{" "}
          <span className="text-capitalize header-font">
            {data.originType} Origin
          </span>
        </h6>
        <h5 className="card-subtitle title">{data.name}</h5>
        <h6 className="text-body-secondary my-2 header-font">
          {data.intents} Intents
        </h6>
        <div className="mt-3 header-font">
          <button className="button-action button-view">View</button>
          <button className="button-action button-remove">Remove</button>
        </div>
        <p class="card-footer text-body-secondary">
          <small className="text-capitalize update-time">
            last update {updateDate.toDateString()} @ {time}
          </small>
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
