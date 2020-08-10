const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const PostRoutes = require('./PostRoutes')

mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('mongodb server connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.use('/api/posts', PostRoutes)

app.listen(port, () => {
  console.log(`server started on post ${port}`);
});
