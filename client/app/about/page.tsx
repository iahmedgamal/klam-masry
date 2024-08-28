export default function About() {
  return (
    <main className="flex justify-center flex-col items-center min-h-screen bg-gray-950 text-cyan-300">
      <div className="bg-cyan-800 text-cyan-50 p-2 hover:cursor-pointer absolute top-0 left-0 m-4">
        <a href="/">back</a>
      </div>
      <h1 className="bg-cyan-700 p-4 mb-2 rounded-t-md text-3xl  text-white">
        Klam Masry | كلام مصري
      </h1>

      <div className="p-4 text-center rounded-md">
        <p className="mb-3  text-center align-text-bottom text-wrap">
          Hello,

          I'm happy to see you here discovering this site, why this is important?
          This is a platform for you to learn Egyptian language with the most appeared words and sentances
        </p>

        <p>
          Were are native Egyptians
        </p>

        <a href="https://www.linkedin.com/in/ahmadgmustafa/" className="text-blue-500  mb-3">
          Connect on LinkedIn
        </a>
      </div>
    </main>
  );
}