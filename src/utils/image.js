const fs = require("fs");
const axios = require("axios");
const { ACCESS_KEY } = require("./../configs");
const { loadImage, createCanvas } = require("canvas");
const path = require("path");

module.exports = function image(text) {
  const apiUrl = `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&page=1&query=${text.title}`;

  const destinationPath = path.join(
    __dirname,
    "..",
    "..",
    "images",
    "image.png"
  );

  axios.get(apiUrl).then((response) => {
    const photos = response.data.results;
    const randomNumber = Math.floor(Math.random() * photos.length);
    let url;

    if (photos.length === 0) {
      url =
        "https://alcoceroptico.com/wp-content/uploads/2015/12/espejismo_alcocer_optico.jpg";
    } else {
      url = photos[randomNumber].urls.full;
    }

    createPhotoAndImage(url, destinationPath, text);
  });
};

function createPhotoAndImage(url, destinationPath, text) {
  axios({
    url: url,
    responseType: "stream",
  })
    .then((response) => {
      const stream = response.data.pipe(fs.createWriteStream(destinationPath));

      stream.on("finish", () => {
        console.log("success!");
        loadImage(`${destinationPath}`).then((image) => {
          const canvas = createCanvas(image.width, image.height);
          const context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, canvas.width, canvas.height);

          const fontSizeMainText = Math.min(
            canvas.width / 25,
            canvas.height / 25
          );
          const mainText = text.content.replace(/,(?!\s*\n)/g, ",\n");
          context.font = fontSizeMainText + "px Arial";
          const colors = {
            1: "black",
            2: "white",
            3: "grey",
          };
          context.fillStyle = colors[Math.floor(Math.random() * 3) + 1];

          const textWidth = context.measureText(mainText).width;
          const xMainText = (canvas.width - textWidth) / 2;
          let yMainText = canvas.height / 2;

          const words = mainText.split(" ");
          let line = "";
          for (const word of words) {
            const testLine = line + word + " ";
            const metrics = context.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > canvas.width - 40) {
              context.fillText(line, xMainText, yMainText);
              line = word + " ";
              yMainText += fontSizeMainText + 5; // Avance vertical
            } else {
              line = testLine;
            }
          }
          context.fillText(line, xMainText, yMainText);

          const fontSizeTitle = Math.min(canvas.width / 20, canvas.height / 20);
          const title = text.title;
          context.font = fontSizeTitle + "px Arial";
          context.fillStyle = "blue";
          const titleWidth = context.measureText(title).width;
          const xTitle = (canvas.width - titleWidth) / 2;
          const yTitle = yMainText - fontSizeTitle * 1.5;
          context.fillText(title, xTitle, yTitle);

          // const fontSizeAuthor = Math.min(

          const output = fs.createWriteStream(destinationPath);
          const imageStream = canvas.createPNGStream();

          imageStream.pipe(output);
          output.on("finish", () => console.log("¡TEXT SUCCESS!"));
        });
      });

      stream.on("error", (err) => {
        console.error("Error :", err);
      });
    })
    .catch((error) => {
      console.error("Error ", error);
    });
}
