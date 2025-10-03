export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center mt-10">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/hekal74"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/eslamhekal74"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:eslamhekal74@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Eslam Mohamed Hekal. All rights reserved.
      </p>
    </footer>
  );
}
