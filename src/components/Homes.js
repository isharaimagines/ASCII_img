import ReactPlayer from "react-player";
import React, { useState } from "react";
import "./Home.css";
import "./Footer.css";
import video from "../assets/video.gif";
import show_arrow from "../assets/ds.png";

import cardimage1 from "../assets/people.png";
import cardimage2 from "../assets/animal.png";
import cardimage3 from "../assets/anime.png";
import cardimage4 from "../assets/architecture.png";
import cardimage5 from "../assets/character.png";
import cardimage6 from "../assets/food.png";
import cardimage7 from "../assets/sci-fi.png";

import arrow_uptothis from "../assets/wd.png";
import logo from "../assets/my_logo.png";

const Homes = () => {
  const [asciiArt, setAsciiArt] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const convertToAscii = (imageData) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const { width, height } = imageData;
    const aspectRatio = width / height;
    const resolution = 850;

    if (width >= height) {
      canvas.width = resolution;
      canvas.height = resolution / aspectRatio;
    } else {
      canvas.width = resolution * aspectRatio;
      canvas.height = resolution;
    }

    ctx.drawImage(imageData, 0, 0, canvas.width, canvas.height);

    const imageDataData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    ).data;
    const density = [
      "@",
      "#",
      "%",
      "$",
      "+",
      "=",
      "-",
      ">",
      "<",
      "?",
      "!",
      ";",
      ":",
      ",",
      ".",
      ".",
      " ",
    ];

    let asciiArtString = "";
    const fontSize = Math.max(1, resolution / 200);

    for (let y = 0; y < canvas.height; y += 5) {
      let row = "";
      for (let x = 0; x < canvas.width; x += 3) {
        const pixelIndex = (x + y * canvas.width) * 4;
        const r = imageDataData[pixelIndex + 0];
        const g = imageDataData[pixelIndex + 1];
        const b = imageDataData[pixelIndex + 2];

        const avg = (r + g + b) / 20;
        const charIndex = Math.floor((avg / 255) * density.length);
        const char = density[charIndex];
        const color = `rgb(${r}, ${g}, ${b})`;

        if (char !== undefined) {
          row += `<span style="color: ${color}; font-size: ${fontSize}px;">${char}</span>`;
        }
      }
      asciiArtString += row + "<br>";
    }

    setAsciiArt(asciiArtString);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;
      setUploadedImage(e.target.result); // Set the uploaded image to state

      image.onload = () => {
        convertToAscii(image);
        scrollToSection("1");
      };
    };

    reader.readAsDataURL(file);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeCard, setActiveCard] = useState(1);

  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  return (
    <>
      <div className="home_containers" id="0">
        <div className="containe_banner">
          <div className="banner_left">
            <img src={video} alt="video_alt" className="videoplayer" />

            <h1>Colorful ASCII Art Generator</h1>
            <span>
              100% Automatically and <i>Free</i>
            </span>
          </div>
          <div className="banner_right">
            <div className="card__container">
              <article className="card__article">
                <div className="card__data">
                  <label htmlFor="image-upload">
                    <span>
                      Upload image <i class="ri-upload-cloud-2-line"></i>
                    </span>
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      hidden
                    />
                  </label>
                  <h1 className="card__title">
                    Beautiful design, <br></br>with another level
                  </h1>
                  <p className="card__description">
                    or drop a file, paste image or URL
                  </p>
                </div>

                <div className="card__shapes">
                  <span className="card__shape"></span>
                  <span className="card__shape"></span>
                  <span className="card__shape"></span>
                  <span className="card__shape"></span>
                  <span className="card__shape"></span>
                  <span className="card__shape"></span>
                  <span className="card__shape"></span>
                  <span className="card__shape"></span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------processign_section----------------- */}

      <div className="work_container" id="1">
        <div className="container">
          {uploadedImage && (
            <div className="image_process">
              <h1>Magic Output</h1>
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="uploda_image_file"
              />
              <img src={show_arrow} alt="" className="arrows_down" />
              <pre
                id="ascii-art-container"
                dangerouslySetInnerHTML={{ __html: asciiArt }}
              />
            </div>
          )}
          {!uploadedImage && (
            <div className="none_section">
              <h2>
                Let's <span>Start</span>
              </h2>
              <img src={arrow_uptothis} alt="arrow up" />
            </div>
          )}
        </div>
      </div>

      {/*---------------------- ----------------------*/}
      <div className="example_container" id="2">
        <div className="container_cards">
          <h1>
            Different <span>&nbsp;&nbsp;&nbsp;Quality&nbsp;&nbsp;&nbsp;</span>
          </h1>

          <div className="cards">
            <div
              className={`card_z ${activeCard === 1 ? "active" : ""}`}
              onClick={() => handleCardClick(1)}
              style={{ backgroundImage: `url(${cardimage1})` }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon" style={{ color: "#1a2947" }}>
                  <i class="ri-camera-fill"></i>
                </div>
                <div className="info">
                  <div className="title">Photography</div>
                  <div className="">
                    Images can be converted to text based image
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`card_z ${activeCard === 2 ? "active" : ""}`}
              onClick={() => handleCardClick(2)}
              style={{ backgroundImage: `url(${cardimage2})` }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon" style={{ color: "#1a2947" }}>
                  <i class="ri-bear-smile-fill"></i>
                </div>
                <div className="info">
                  <div className="title">Animals</div>
                  <div className="">
                    Images can be converted to text based image
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`card_z ${activeCard === 3 ? "active" : ""}`}
              onClick={() => handleCardClick(3)}
              style={{ backgroundImage: `url(${cardimage3})` }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon" style={{ color: "#1a2947" }}>
                  <i class="ri-star-fill"></i>
                </div>
                <div className="info">
                  <div className="title">Anime</div>
                  <div className="">
                    Images can be converted to text based image
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`card_z ${activeCard === 4 ? "active" : ""}`}
              onClick={() => handleCardClick(4)}
              style={{ backgroundImage: `url(${cardimage4})` }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon" style={{ color: "#1a2947" }}>
                  <i class="ri-home-gear-fill"></i>
                </div>
                <div className="info">
                  <div className="title">Architecture</div>
                  <div className="">
                    Images can be converted to text based image
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`card_z ${activeCard === 5 ? "active" : ""}`}
              onClick={() => handleCardClick(5)}
              style={{ backgroundImage: `url(${cardimage5})` }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon" style={{ color: "#1a2947" }}>
                  <i class="ri-star-fill"></i>
                </div>
                <div className="info">
                  <div className="title">Character</div>
                  <div className="">
                    Images can be converted to text based image
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`card_z ${activeCard === 6 ? "active" : ""}`}
              onClick={() => handleCardClick(6)}
              style={{ backgroundImage: `url(${cardimage6})` }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon" style={{ color: "#1a2947" }}>
                  <i class="ri-star-fill"></i>
                </div>
                <div className="info">
                  <div className="title">Food</div>
                  <div className="">
                    Images can be converted to text based image
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`card_z ${activeCard === 7 ? "active" : ""}`}
              onClick={() => handleCardClick(7)}
              style={{ backgroundImage: `url(${cardimage7})` }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon" style={{ color: "#1a2947" }}>
                  <i class="ri-star-fill"></i>
                </div>
                <div className="info">
                  <div className="title">Sci-Fi</div>
                  <div className="">
                    Images can be converted to text based image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-----------------------------*/}
      <div className="about_container" id="3">
        <div className="footer">
          <div className="f_container">
            <div className="align-items-center">
              <div className="col">
                <img src={logo} alt="Logo" />
                <p>Imaginalytic ORG.</p>
              </div>
              <div className="discription">
                <h4>About Company</h4>
                <small>
                  Our company is a global powerhouse in computer science. We
                  provide comprehensive consulting, development, and research
                  services, empowering organizations to harness the full
                  potential of technology in an ever-evolving digital landscape.
                </small>
                <small>
                  <sup>©</sup>Copyright 2023. All Rights Reserved
                </small>
                <small>
                  <a href="/">Privacy Policy</a>
                </small>
              </div>
              <div className="social">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/ishara-siriwardhana-5b1732274/">
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a href="https://github.com/ishararaviget9/">
                    <i className="ri-github-fill"></i>
                  </a>
                  <a href="mailto:studymotivat01@gmail.com">
                    <i className="ri-mail-send-fill"></i>
                  </a>
                  <a href="https://discord.gg/ZBPR3EP3B6">
                    <i className="ri-discord-fill"></i>
                  </a>
                </div>
                <div className="social-icon">
                  <a href="https://t.me/DroidImaginalytic">
                    <i className="ri-telegram-fill"></i>
                  </a>
                  <a href="https://instagram.com/ishararaviget9">
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a href="https://ishararaviget9.github.io/myprofile/">
                    <i className="ri-youtube-fill"></i>
                  </a>
                </div>
                <p>
                  Let's connect with us and comfort with<br></br>
                  advanced technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homes;
