import * as React from "react";

const Services = ({ services }) => (
  <div className="content section-mt">
    <p className="title has-text-centered">{services.title}</p>
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
          <div className="column card" key={service.heading + idx}>
            <h3>{service.heading}</h3>
            <p className="subtitle card-content">{service.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Services;
