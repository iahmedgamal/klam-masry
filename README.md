# Klam Masry

Learn Egyptian Arabic with the most common words.

Live: [klam-masry.vercel.app](https://klam-masry.vercel.app/)

## The Story

Back in 2020, I was watching a YouTube video about building a Twitter API. I thought, "I wanna build something like that!" So I built a Twitter bot. Fast forward to today, that bot is still alive with 20K followers.

At some point, I started saving all the tweets coming from the region. A year later, my database hit its max size — 1 GB of Egyptian text. I thought, "What the heck do I do with all this data?"

That's when it clicked. I built a Wordle-style game using Egyptian words (play it [here](https://tarbana.shankout.dev)). Then I created this project to showcase the most common Egyptian Arabic words — 3,000 of them, sorted by how often they appear in real conversations so you learn the most relevant stuff first.

A version focused on common phrases is coming soon.

## Stack

- Frontend: Next.js
- Backend: Node.js + Express
- Database: MongoDB

## Run locally

```bash
git clone https://github.com/iahmedgamal/klam-misr.git
cd klam-misr
```

**Server** (`/server`):

```bash
# .env
MONGODB_URI=your-mongo-uri

npm install && npm run dev
```

**Client** (`/client`):

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:5000

npm install && npm run dev
```

## Contributing

Open a pull request if you want to add words, fix bugs, or improve anything.
