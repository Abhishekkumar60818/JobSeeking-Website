import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://abhishekkumar65856:Ixt5h8kA6h1DhHmd@cluster0.b3ji56q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
      useNewUrlParser: true, // Ensure compatibility with MongoDB driver
      useUnifiedTopology: true, // Ensure compatibility with MongoDB driver
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occurred. ${err}`);
    });
};
