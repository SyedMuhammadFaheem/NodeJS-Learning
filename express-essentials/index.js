import express, { response } from "express";
import data from "./data/data.json" assert { type: "json" };

const app = express();
const PORT = 3000;

// using express.static from root
app.use(express.static("public"));

// using express.static from /images
app.use("/images", express.static("images"));

// handeling route parameters
app.get("/class/:id", (request, response) => {
  const id = Number(request.params.id);
  const result = data.filter((entity) => entity.id === id);
  response.send(result);
});

// handeling route handelers
app.get(
  "/next",
  (request, response, next) => {
    console.log("Hello from original api handeler");
    next();
  },
  (request, response) => {
    response.send("Hello from next api callback handeler");
  }
);

// handeling response methods
app.get("/redirect", (request, response) => {
  response.redirect("http://www.linkedin.com");
});

// using route chaining
app
  .route("/class")
  .get((request, response) => {
    // response.send("This is a chained GET request");
    throw new Error()
  })
  .post((request, response) => {
    response.send("This is a chained POST request");
  })
  .put((request, response) => {
    response.send("This is a chained PUT request");
  })
  .delete((request, response) => {
    response.send("This is a chained DELETE request");
  });

// using middlewares in express
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post("/items", (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

app.get("/", (request, response) => {
  // response.send("This is a GET request at /")
  response.json(data);
});
app.post("/create", (request, response) => {
  response.send("This is a POST request at /create");
});
app.put("/update", (request, response) => {
  response.send("This is a PUT request at /put");
});
app.delete("/delete", (request, response) => {
  response.send("This is a DELETE request at /delete");
});

//custom error handeler
app.use((err,req,res,next)=>{
    console.error(err)
    res.status(500).send("Something is broken!")
})

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
  // console.log(data)
});
