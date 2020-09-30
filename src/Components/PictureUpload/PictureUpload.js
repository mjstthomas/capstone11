import React, { Component } from "react";
import Spinner from "./Spinner";
import Image from "./Image";
import ImageButton from "./ImageButton";
import "./PictureUpload.css";
import { storage } from "../../Firebase";

// export default class ImageUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { file: "", imagePreviewUrl: "" };
//   }

//   _handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("handle uploading-", this.state.file);

//   const uploadImg = storage
//     .ref(`file/${this.state.file.name}`)
//     .put(this.state.file);
//   uploadImg.on(
//     "state_changed",
//     (snapshot) => {},
//     (error) => {
//       console.log(error);
//     },

//     () => {
//       storage
//         .ref("file")
//         .child(this.state.file.name)
//         .getDownloadURL()
//         .then((url) => {
//           console.log(url);
//         });
//     }
//   );
// };

//   _handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result,
//       });
//     };

//     reader.readAsDataURL(file);
//   }

//   render() {
//     let { imagePreviewUrl } = this.state;
//     let $imagePreview = null;
//     if (imagePreviewUrl) {
//       $imagePreview = <img src={imagePreviewUrl} alt="preview" />;
//     } else {
//       $imagePreview = (
//         <div className="previewText">Please select an Image for Preview</div>
//       );
//     }

//     return (
//       <div className="previewComponent">
//         <form onSubmit={(e) => this._handleSubmit(e)}>
//           <input
//             className="fileInput"
//             type="file"
//             onChange={(e) => this._handleImageChange(e)}
//           />
//           <button
//             className="submitButton"
//             type="submit"
//             onClick={(e) => this._handleSubmit(e)}
//           >
//             Upload Image
//           </button>
//         </form>
//         <div className="imgPreview">{$imagePreview}</div>
//       </div>
//     );
//   }
// }

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

    const uploadImg = storage.ref(`file/${file.name}`).put(formData);
    uploadImg.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },

      () => {
        storage
          .ref("file")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            fetch(`${process.env.REACT_APP_API_URL}api/images/`, {
              method: "POST",
              body: url,
            })
              .then((res) => res.json())
              .then((image) => {
                this.setState({
                  uploading: false,
                  image: image,
                  error: "",
                });
              });
          });
      }
    );
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
