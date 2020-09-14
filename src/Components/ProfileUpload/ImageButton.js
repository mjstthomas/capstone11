import React from "react";

function ImageButton(props) {
  return (
    <article className="buttons fadein">
      <section className="button">
        <label htmlFor="image">
          <i class="fas fa-file-image"></i>
        </label>
        <input type="file" id="image" onChange={props.onChange} />
      </section>
    </article>
  );
}

export default ImageButton;
