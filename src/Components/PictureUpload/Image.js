import React from "react";

function Image (props) {
  const uploadedImage = props.image.map((image, i) => (
    <article key={i} className="fadein">
      <section
        onClick={() => props.removeImage(image.public_id)}
        className="delete"
      >
        <i class="fas fa-times-circle"></i>
      </section>
      <img
        src={image.secure_url}
        alt=""
        onError={() => props.onError(image.public_id)}
      />
    </article>
  ));
 return uploadedImage
}
export default Image
