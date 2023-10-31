import * as React from "react";

const Services = ({ services }) => (
  <div className="content pt-80">
    <p className="title align-center">{services.title}</p>
    <p>{services.description}</p>
    <div
      className="columns is-multiline"
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {services.blurbs.map((service, idx) => {
        return (
          <div className="column is-1 card" key={service.heading + idx}>
            <h3>{service.heading}</h3>
            <p className="subtitle card-content">{service.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Services;
