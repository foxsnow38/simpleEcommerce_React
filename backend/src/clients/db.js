import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((e) => console.log('MongoDB: Connectted'
  ))
  .catch((err) => console.log(err.message));
