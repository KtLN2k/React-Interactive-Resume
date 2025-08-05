function Education() {
    return (
        <section className="mb-10">
        {/* כותרת */}
        <h2 className="text-xl font-bold text-gray-900 uppercase translate-middle mb-2">
            Education
        </h2>
        <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>

        {/* תוכן */}
        <div className="space-y-4">
            <div>
                <h3 className="text-lg font-semibold text-gray-900">B.Sc. in Computer Science</h3>
                <p className="text-gray-700 text-sm">University of Example, 2015 - 2019</p>
                <p className="text-gray-600 text-sm">Graduated with Honors, GPA: 3.8/4.0</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">M.Sc. in Software Engineering</h3>
                <p className="text-gray-700 text-sm">Institute of Sample, 2020 - 2022</p>
                <p className="text-gray-600 text-sm">Thesis: "Optimizing Web Application Performance"</p>
            </div>
        </div>

        </section>
    )
}

export default Education