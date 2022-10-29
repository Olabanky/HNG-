import React from "react";
import "./Link.css";

const Link = () => {
  return (
    <section className="link">
      <div className="links">
        <button className="frame">Twitter</button>
      </div>
      <div className="links">
        <button className="frame" id="btn-zuri">
          Zuri Team
        </button>
      </div>
      <div className="links">
        <button className="frame" id="books">
          Zuri Books
        </button>
      </div>
      <div className="links">
        <button className="frame" id="book_python">
          <p>Python Books</p>
        </button>
      </div>
      <div className="links">
        <button className="frame" id="pitch">
          Background Check for Coders
        </button>
      </div>
      <div className="links">
        <button className="frame" id="book_design">
          Design Books
        </button>
      </div>
    </section>
  );
};

export default Link;
