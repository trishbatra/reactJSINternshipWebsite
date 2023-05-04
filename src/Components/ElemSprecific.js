import React, { useState } from "react";
import DOMPurify from "dompurify";

const ElemSprecific = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("address", address);

    setIsOpen(false);

    alert("Details submitted successfully!");
  };

  const a = JSON.parse(localStorage.getItem("elem"));

  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className="container">
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <h2>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>

              <button className="btn"  type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <div className="image">
        <img id="specImg" src={a.show.image.medium} alt="" />
      </div>
      <div className="description">
        <h2 id="h">{a.show.name}</h2>
        <span
          className={`${a.show.status == "Ended" ? "red" : "green"}`}
        >
          {a.show.status != "Ended"
            ? "Show Still Running"
            : "Show has Ended"}
        </span>
        <p dangerouslySetInnerHTML={sanitizeHTML(a.show.summary)}></p>
        <p>
          Genres <em> {a.show.genres[0] + ",  " + a.show.genres[1]} </em>
        </p>
        <p>
          Schedule : At {a.show.schedule.time} every {a.show.schedule.days}
        </p>
        <button onClick={() => setIsOpen(true)} className="btn">
          Book Ticket
        </button>
      </div>
    </div>
  );
};

export default ElemSprecific;
