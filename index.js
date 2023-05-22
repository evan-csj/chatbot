const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

const { dockStart } = require("@nlpjs/basic");

(async () => {
  await dockStart();
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
