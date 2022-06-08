import React from "react";
import EventCard from "./EventCard";

export const Event = () => {
  return (
    <section class="languages">
      <h4 class="sm text-center my-2">
        Mjesto najbolje zabave! Vaš Club &#129305;
      </h4>
      <div class="container flex">
        <EventCard />
      </div>
      <h4 class="sm text-center my-2">Rezervacije vrijede do 22:30h !</h4>
    </section>
  );
};
