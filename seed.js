const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb+srv://AtharvaS7153:ddskdhf123@atharvadb.olmumix.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  {
    name: "Rahul Mehta",
    email: "rahul@example.com",
    passwordHash: "x",
    role: "citizen",
    points: 40,
  },
  {
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    passwordHash: "x",
    role: "volunteer",
    points: 70,
  },
  {
    name: "Priya Nair",
    email: "priya@example.com",
    passwordHash: "x",
    role: "citizen",
    points: 25,
  },
  {
    name: "Ananya Verma",
    email: "ananya@example.com",
    passwordHash: "x",
    role: "admin",
    points: 100,
  },
  {
    name: "Vikram Singh",
    email: "vikram@example.com",
    passwordHash: "x",
    role: "volunteer",
    points: 55,
  },
];

(async () => {
  await User.deleteMany({});
  await User.insertMany(users);
  console.log("Dummy users seeded");
  mongoose.disconnect();
})();
