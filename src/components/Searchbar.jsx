import React, { useState } from "react";

function Searchbar({ setSearch }) {
  const [text, setText] = useState("");

  const handelChange = (e) => {
    setText(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
      <section className="search">
        <form>
          <input
            className="form-control"
            placeholder="Search Characters"
            autoFocus
            type="text"
            name="search"
            value={text}
            onChange={handelChange}
            id="search"
          />
        </form>
      </section>
    </div>
  );
}

export default Searchbar;
