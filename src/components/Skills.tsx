export default function Skills() {
  const skills = [
    "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
    "Redux", "Zustand", "Tailwind CSS", "Bootstrap",
    "Git/GitHub", "Azure", "Agile"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="font-medium text-gray-700">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
