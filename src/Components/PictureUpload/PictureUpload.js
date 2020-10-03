import React from "react";
import "./PictureUpload.css";
import { storage } from "../../Firebase";

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "", error: "" };
  }

  _handleSubmit = (e) => {
    e.preventDefault();
  };

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });

      if (this.state.file.size > 150000) {
        const msg = `Image is too large, please pick a smaller file`;
        let prevState = this.state;
        this.setState({ ...prevState, error: msg });
      } else {
        const uploadImg = storage
          .ref(`file/${this.state.file.name}`)
          .put(this.state.file);
        uploadImg.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            this.setState({
              error: error.message,
            });
          },

          () => {
            storage
              .ref("file")
              .child(this.state.file.name)
              .getDownloadURL()
              .then((url) => {
                this.props.setImage(url);
              })
              .then(() => {
                this.setState({
                  error: "",
                });
              });
          }
        );
      }
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="preview" />;
    } else {
      $imagePreview = (
        <div className="previewText">
          <i className="fas fa-file-image"></i>
        </div>
      );
    }

    return (
      <React.Fragment>
        {this.state.error && <p className="imageError">{this.state.error}</p>}
        <div className="imgPreview">{$imagePreview}</div>
        <input
          className="fileInput"
          type="file"
          onChange={(e) => this._handleImageChange(e)}
        />
      </React.Fragment>
    );
  }
}
