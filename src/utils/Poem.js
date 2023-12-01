const db = require("megadb");
let Poems = new db.crearDB("poems");

module.exports = async function poetic(author) {
  if (author === "YOUR-NAME") {
    const poem = require("./poems.json");
    const number = (await Poems.get("YOUR-NAME"))
      ? await Poems.get("YOUR-NAME")
      : 0;
    Poems.set("YOUR-NAME", parseInt(number) + 1);
    return poem.poems[parseInt(number)];
  }
};
