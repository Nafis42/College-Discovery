import dotenv from "dotenv";
const result = dotenv.config();

console.log(result);

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("PORT =", process.env.PORT);
});