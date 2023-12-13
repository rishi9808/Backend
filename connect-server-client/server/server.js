import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("server is ready");
  res.send("Hi");
});

// get a object of jokes

const jokes = [
  {
    id: 1,
    type: "general",
    setup: "What did the fish say when it hit the wall?",
    punchline: "Dam.",
  },

  {
    id: 2,
    type: "general",
    setup: "How do you make a tissue dance?",
    punchline: "You put a little boogie on it.",
  },

  {
    id: 3,
    type: "general",
    setup: "What's Forrest Gump's password?",
    punchline: "1Forrest1",
  },

  {
    id: 4,
    type: "general",
    setup: "What do you call a belt made out of watches?",
    punchline: "A waist of time.",
  },

  {
    id: 5,
    type: "general",
    setup: "Why can't bicycles stand on their own?",
    punchline: "They are two tired",
  },

  {
    id: 6,
    type: "general",
    setup: "How does a train eat?",
    punchline: "It goes chew, chew",
  },

  {
    id: 7,
    type: "general",
    setup: "What do you call a singing Laptop",
    punchline: "A Dell",
  },

  {
    id: 8,
    type: "general",
    setup: "How many lips does a flower have?",
    punchline: "Tulips",
  },

  {
    id: 9,
    type: "general",
    setup: "How do you organize an outer space party?",
    punchline: "You planet",
  },

  {
    id: 10,
    type: "general",
    setup: "What kind of shoes does a thief wear?",
    punchline: "Sneakers",
  },
];


app.get("/api/jokes", (req, res) => {
    res.json(jokes);
    });


app.listen(port, () => {
  console.log("server listening..");
});
