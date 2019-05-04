const express = require("express");
const morgan = require("morgan");
const itemRoutes = require("./routes/items");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/items", itemRoutes);

// catch 404 and pass on to error handler

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

//
app.use((err, req, res, next) => {
  let status = err.status || 500;
  return res.status(status).json({
    message: err.message,
    status: status
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001!");
});
