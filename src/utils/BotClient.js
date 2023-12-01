const robot = require("robotjs");
const poetic = require("./Poem");
const image = require("./image");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms * 100));
}

module.exports = class CLientBot {
  constructor() {
    this.firefox = { x: 1160, y: 1055 };
    this.searchBar = { x: 722, y: 63 };
    this.create = { x: 84, y: 552 };
    this.select = { x: 971, y: 640 };
    this.image = { x: 224, y: 178 };
    this.next = { x: 1274, y: 190 };
    this.next2 = { x: 1441, y: 193 };
    this.write = { x: 1228, y: 288 };
    this.share = { x: 1439, y: 192 };

    this.Instagram_url = "https://www.instagram.com/";
    this.path = "C:\\Users\\brian\\OneDrive\\Escritorio\\Instagram\\images";
  }
  async Start() {
    robot.dragMouse(this.firefox.x, this.firefox.y);
    robot.mouseClick("left");

    await sleep(5);

    robot.dragMouse(this.searchBar.x, this.searchBar.y);
    robot.mouseClick("left");

    robot.typeString(this.Instagram_url);
    robot.keyTap("enter");

    await sleep(5);

    await this.Create(0);
  }

  async Create(i) {
    const author = i === 0 ? "Brian" : 1;

    if (!isNaN(author)) return;

    const text = await poetic(author);

    await image(text);

    await sleep(30);

    robot.dragMouse(this.create.x, this.create.y);
    robot.mouseClick("left");

    await sleep(30);

    robot.dragMouse(this.select.x, this.select.y);
    await sleep(30);
    robot.mouseClick("left");
    robot.mouseClick("left");

    await sleep(30);

    robot.dragMouse(this.searchBar.x, this.searchBar.y);
    robot.mouseClick("left");

    robot.typeString(this.path);

    await sleep(30);

    robot.keyTap("enter");

    robot.dragMouse(this.image.x, this.image.y);
    robot.mouseClick("left");

    robot.keyTap("enter");

    await sleep(30);

    robot.dragMouse(this.next.x, this.next.y);
    robot.mouseClick("left");

    await sleep(30);

    robot.dragMouse(this.next2.x, this.next2.y);
    robot.mouseClick("left");

    await sleep(30);

    robot.dragMouse(this.write.x, this.write.y);
    robot.mouseClick("left");

    const texts = `Por ${text.author}`;

    robot.typeString(texts);

    await sleep(30);

    robot.dragMouse(this.share.x, this.share.y);
    robot.mouseClick("left");
    robot.mouseClick("left");

    await sleep(30);

    robot.dragMouse(this.create.x, this.create.y);
    robot.mouseClick("left");

    await sleep(30);

    return this.Create(i + 1);
  }
};
