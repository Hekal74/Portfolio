export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Whether you’re looking to collaborate on a project, hire me, or just say hi — feel free to drop a message 👋
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="mailto:eslamhekal74@gmail.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/eslamhekal74"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-black transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/hekal74"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}