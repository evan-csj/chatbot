const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());
app.use(express.json());

const { dockStart } = require("@nlpjs/basic");

(async () => {
  const dockConfiguration = {
    settings: {
      nlp: { corpora: ["./corpora/corpus-en.json"] },
    },
    use: ["Basic", "ConsoleConnector"],
  };
  const dock = await dockStart(dockConfiguration);
  const nlp = dock.get("nlp");
  await nlp.train();

  app.post("/chatbot", async (req, res) => {
    const text = req.body.text;
    const response = await nlp.process("en", text);
    res.status(200).json(response.answer);
  });
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
