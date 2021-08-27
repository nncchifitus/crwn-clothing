import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

import "./contact.style.scss";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      contactImages: [
        "react.png",
        "redux.png",
        "firebase.png",
        "stripe.png"
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.currentImage === this.state.contactImages.length-1) {
        this.setState({ currentImage: 0 });
      } else {
        this.setState({ currentImage: this.state.currentImage + 1 });
      }
    }, 3000);
  }

  render() {
    const { currentImage, contactImages } = this.state;
    console.log(contactImages.length)
    console.log(contactImages[currentImage]);
    return (
      <div className="contact-page">
        <div className="contact-image">
          <img
            src={require(`../../assets/contact-img/${contactImages[currentImage]}`).default}
            alt="img"
          />
        </div>
        <div className="contact-icons">
          <a
            href="https://www.facebook.com/nncchifit/"
            className="contact-icon"
          >
            <FaFacebookSquare className="icon" />
            <span>Chí Nguyễn</span>
          </a>
          <a href="https://github.com/nncchifitus" className="contact-icon">
            <FaGithubSquare className="icon" />
            <span>https://github.com/nncchifitus</span>
          </a>
          <div className="contact-icon">
            <FaRegEnvelope className="icon" />
            <span>nncchi.fitus@gmail.com</span>
          </div>
          <div className="contact-icon">
            <FaMobileAlt className="icon" />
            <span>0966280919</span>
          </div>
          <div className="contact-icon">
            <GoLocation className="icon" />
            <span>District 8, HCM city</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
