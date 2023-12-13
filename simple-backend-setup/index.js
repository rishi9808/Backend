const express = require("express");
require("dotenv").config();
const app = express();

const githubData = {
  login: "rishi9808",
  id: 81485622,
  node_id: "MDQ6VXNlcjgxNDg1NjIy",
  avatar_url: "https://avatars.githubusercontent.com/u/81485622?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/rishi9808",
  html_url: "https://github.com/rishi9808",
  followers_url: "https://api.github.com/users/rishi9808/followers",
  following_url:
    "https://api.github.com/users/rishi9808/following{/other_user}",
  gists_url: "https://api.github.com/users/rishi9808/gists{/gist_id}",
  starred_url: "https://api.github.com/users/rishi9808/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/rishi9808/subscriptions",
  organizations_url: "https://api.github.com/users/rishi9808/orgs",
  repos_url: "https://api.github.com/users/rishi9808/repos",
  events_url: "https://api.github.com/users/rishi9808/events{/privacy}",
  received_events_url: "https://api.github.com/users/rishi9808/received_events",
  type: "User",
  site_admin: false,
  name: "Rishikesh K V",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 47,
  public_gists: 0,
  followers: 4,
  following: 17,
  created_at: "2021-03-27T18:15:43Z",
  updated_at: "2023-12-12T06:27:40Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/rishi", (req, res) => {
  res.send("hello from rishi");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login success</h1>");
});

app.get("/youtube", (req, res) => {
  res.send('<a href="https://www.youtube.com/">Youtube</a>');
});

app.get("/data", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
