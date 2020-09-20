import React, { Component } from "react";
import Spinner from "./Spinner";
import Image from "./Image";
import ImageButton from "./ImageButton";
// import { API_URL } from "./config";
import "./PictureUpload.css";

export default class PictureUpload extends Component {
  state = {
    uploading: false,
    image: [],
    error: "",
  };

  onChange = (e) => {
    const file = Array.from(e.target.files);

    let prevState;

    if (file.length > 1) {
      const msg = "Only 1 image can be uploaded at a time";
      prevState = this.state;
      this.setState({ ...prevState, error: msg });
    }

    // Catching files that are too large on the client
    if (file[0].size > 150000) {
      const msg = `'${file.name}' is too large, please pick a smaller file`;
      prevState = this.state;
      this.setState({ ...prevState, error: msg });
    }

    this.setState({ uploading: true });

    const formData = new FormData();

    formData.append(0, file);

    // fetch(`${API_URL}/image-upload`, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((image) => {
    //     this.setState({
    //       uploading: false,
    //       image,
    //       error: "",
    //     });
    //   });
  };

  removeImage = () => {
    this.setState({
      image: this.state.image.splice(0, 1),
    });
  };

  render() {
    const { uploading, image } = this.state;

    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        case image.length > 0:
          return (
            <Image image={this.state.image} removeImage={this.removeImage} />
          );
        default:
          return <ImageButton onChange={this.onChange} />;
      }
    };

    return (
      <article className="">
        {this.state.error && <p>{this.state.error}</p>}
        <section className="buttons">{content()}</section>
      </article>
    );
  }
}