import React from "react";
import "./ImageButton.css";

function ImageButton(props) {
  return (
    <article className="buttons fadein">
      <section className="button">
        <h2>Upload Profile Picture</h2>
        <label htmlFor="image">
          <i className="fas fa-file-image"></i>
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={props.onChange}
        />
      </section>
    </article>
  );
}

export default ImageButton;
