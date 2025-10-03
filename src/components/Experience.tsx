export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "_VOIS",
      date: "Apr 2025 – Present",
      details: [
        "Frontend Developer in Vodacom OneApp team using React.js & Next.js",
        "Agile workflow with Jira for sprint planning & tracking"
      ]
    },
    {
      role: "Frontend Developer",
      company: "WordWorksAI (Remote, Dubai)",
      date: "Jan 2025 – Mar 2025",
      details: [
        "Built bilingual website (Arabic/English)",
        "Enhanced UI/UX for better usability"
      ]
    },
    {
      role: "Intern",
      company: "Siemens / ICpedia",
      date: "2023",
      details: [
        "Embedded Software fundamentals",
        "Digital Verification with Verilog & UVM"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company} — <span>{exp.date}</span></p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
