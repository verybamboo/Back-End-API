# Project-API

Project 5: Project-API

# Overview

---

Simple character database with CRUD functions for a game called Genshin Impact. Final API subject to change, this is currently a MVP.

# Description

---

This project is just a simple database of characters for an app game called Genshin Impact. You are able to search for the various characters using their name or their ID. The final API is subject to change to add more information such as Nations they're from or the element they use. You are able to create, read, update and delete characters. I might change the API topic completely. The main bulk of this is the database architecture that I can reuse for other future CRUD databases.

# Thoughts and Approach

---

I went through various templates and examples that were provided and just tinkered with them. I tested it with a temporary database and I might change the topic depending on my interests.

# Schema layout

---

- name: { type: String }
- vision: { type: String }
- weapon: { type: String }
- nation: { type: String }
- affiliation: { type: String }
- constellation: { type: String }
- birthday: { type: String } (this is a string because they don't have a birth year and not a true type: Date)
- description: { type: String }

# Instructions and paths

---

Endpoints

- get: /characters - (gets all characters)
- get: /characters/:id - (gets characters by their ID)
- get: /characters/name/:name - (gets characters by their name)
- post: /characters - (create a character)
- put: /characters/:id - (update a character by their ID)
- put: /characters/name/:name - (update a character by their name)
- delete: /characters/:id - (delete a character by their ID)
- delete: /characters/name/:name - (delete a character by their name)

# Unsolved issues

---

1. Currently I am unable to set the route so that /:id and /:name can use the same space. In order to find a character by name using the request.params of name, you have to use /name/:name. This is something I will need to figure out.

# Technologies Used

---

1. JavaScript
2. Mongoose
3. Node.js
4. Express
5. CORS
6. Node-Fetch
7. Morgan
