
# Klam Masry 🇪🇬  

### Learn Egyptian Arabic with the Most Common Words!  

Hello there! Welcome to **Klam Masry** (كلام مصري), a project designed to help people learn Egyptian Arabic by focusing on the **most frequently used words**. I’ve picked the **top 3,000 words** that appear all the time in everyday conversations. And guess what? They’re sorted by how often they’re used, so people will learn the most relevant stuff first.  

👉 **Live Demo:** [https://klam-masry.vercel.app/](https://klam-masry.vercel.app/)  

---

## The Story Behind This Project 🎬  

Okay, Back in **2020**, I was watching a YouTube video about building a Twitter API. I thought, *“I wanna build something like that!”* So, I decided to create a **Twitter bot**. Fast forward to today, that bot is still alive and kicking with **20K followers**! 😱 

At some point, I started saving all the tweets coming from the region (because why not?). A year later, my database hit its max size (1 GB of Egyptian text!). I thought, *“What the heck do I do with all this data?”*  

That’s when the magic happened. I built a **Wordle-style game** using Egyptian words (you can play it [here](https://tarbana.vercel.app/)). Then, I thought, *“Why stop there?”* So, I created this project to showcase the **most common Egyptian Arabic words**.  

I’m also planning to release another version soon (إن شاء الله) that focuses on the **most common phrases**. Stay tuned!  

---

## Tools I Used 🛠️  

This is a **full-stack project**, and here’s the tech stack I used:  

- **Frontend:** Next.js (v14.2.6)  
- **Backend:** Node.js with Express  
- **Database:** MongoDB (to store all those juicy words)  

---

## How to Run the Project 🚀  

Want to run this project locally? Follow these steps:  

1. **Clone the project:**  
   ```bash
   git clone https://github.com/iahmedgamal/klam-misr.git
   ```

2. **Navigate to the project folder:**  
   ```bash
   cd klam-misr
   ```

3. **Set up the backend:**  
   - Go to the `server` folder:  
     ```bash
     cd server
     ```  
   - Create a `.env` file and add your MongoDB URI:  
     ```env
     MONGO_URI=your-mongo-uri
     ```  

4. **Set up the frontend:**  
   - Go back to the root folder:  
     ```bash
     cd ..
     ```  
   - Navigate to the `client` folder:  
     ```bash
     cd client
     ```  
   - Create a `.env.local` file and add the API URL:  
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:5000
     ```  

5. **Install dependencies:**  
   - Run `npm install` in both the `server` and `client` folders.  

6. **Start the development servers:**  
   - In the `server` folder, run:  
     ```bash
     npm run dev
     ```  
   - In the `client` folder, run:  
     ```bash
     npm run dev
     ```  

And Yalla! You’re all set. 🎉  

---

## Project Structure 🗂️  

Here’s how the project is organized:  

- **Frontend:** Located in the `client` folder. It’s a Next.js app that consumes the API and displays the words.  
- **Backend:** Located in the `server` folder. It’s an Express server that serves the frontend and the API.  
- **Database:** MongoDB is used to store all the words.  

---

## How to Contribute 🤝  

I’d be **super happy** if you want to contribute to this project! Here’s how you can help:  

- **Add more words:** Found a word that’s missing? Add it!  
- **Fix bugs:** Spotted a bug? Squash it!  
- **Add features:** Got a cool idea? Implement it!  
- **Improve tests:** Love testing? Go for it!  

Feel free to open a **pull request**, and I’ll review it as soon as I can.

---

## Final Words ✨  

Thanks for checking out **Klam Masry**! Whether you’re here to learn Egyptian Arabic, contribute, or just poke around, I hope you find this project useful (or at least entertaining).  

If you have any questions, suggestions, or just want to say hi, feel free to reach out.  

