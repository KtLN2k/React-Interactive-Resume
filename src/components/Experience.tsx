function Experience() {
    return (
        <section className="mb-10">
        {/* כותרת */}
        <h2 className="text-xl font-bold text-gray-900 uppercase translate-middle mb-2">
            Experience
        </h2>
        <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>

        {/* תוכן */}
        <div className="space-y-4">
            <div>
                <h3 className="text-lg font-semibold text-gray-900">Software Engineer</h3>
                <p className="text-gray-700 text-sm">Tech Company, 2019 - Present</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                    <li>Developed and maintained web applications using React and Node.js.</li>
                    <li>Collaborated with cross-functional teams to define project requirements.</li>
                    <li>Implemented responsive design to enhance user experience across devices.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">Intern Developer</h3>
                <p className="text-gray-700 text-sm">Startup Inc., Summer 2018</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                    <li>Assisted in the development of a mobile application using Flutter.</li>
                    <li>Conducted testing and debugging to ensure application stability.</li>
                    <li>Participated in code reviews and team meetings.</li>
                </ul>
            </div>
        </div>
        </section>
    )
}

export default Experience;