import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white shadow-lg w-full max-w-5xl flex">
        {/* צד שמאל – Header */}
        <Header />

        {/* צד ימין – תוכן */}
        <main className="flex-1 p-8">
          <Profile />
          {/* כאן נוסיף Education, Experience, Skills בהמשך */}
          <Education />
          <Experience />
          <Skills />
        </main>
      </div>
    </div>
  )
}

export default App
