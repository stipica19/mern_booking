import React from "react";

const EventCard = () => {
  return (
    <>
      <div class="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
          alt=""
        />
        <h4>Mile Kitić</h4>
        <p>27.07.2022</p>
        <button className="btn btn-block" type="button">
          Rezerviraj
        </button>
      </div>
      <div class="card">
        <img
          src="https://i.pinimg.com/originals/f6/6e/ef/f66eef74cad510e4a5c3189987d632ac.jpg"
          alt=""
        />{" "}
        <h4>MC STOJAN</h4>
        <p>28.07.2022</p>
        <button className="btn btn-block" type="button">
          Rezerviraj
        </button>
      </div>
    </>
  );
};

export default EventCard;
