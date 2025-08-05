import { FaLinkedin, FaGithub, FaFacebookF, FaGlobe } from "react-icons/fa";
import profileImg from "../assets/profile-img.jpg";

function Header() {
  return (
    <aside className="bg-gray-900 text-white w-72 p-6 flex flex-col items-center">
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Profile"
        className="w-32 h-32 object-cover rounded-full border-4 border-gray-700 shadow-md mx-auto mb-4"
      />

      {/* Name & Title */}
      <h2 className="text-xl font-bold">Ben Katalan</h2>
      <p className="text-sm text-gray-400 mb-6">Web Developer</p>

      {/* Social Icons */}
      <div className="flex gap-4 mb-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-300 transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://benkatalan.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="hover:text-teal-300 transition"
        >
          <FaGlobe size={20} />
        </a>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700 my-4"></div>

      {/* Contact Info */}
      <div className="space-y-3 text-sm text-gray-300 w-full">
        <p>
          <span className="font-semibold text-white">Email:</span> ben@example.com
        </p>
        <p>
          <span className="font-semibold text-white">Phone:</span> 050-0000000
        </p>
        <p>
          <span className="font-semibold text-white">Location:</span> Tel Aviv, Israel
        </p>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700 my-4"></div>

{/* Skills Section */}
<div className="w-full">
  <p className="text-white font-semibold mb-3 uppercase tracking-wide">Skills</p>
  <div className="flex flex-wrap gap-2">
    {["JavaScript", "React", "TypeScript", "CSS", "HTML", "Node.js"].map((skill) => (
      <span
        key={skill}
        className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs transition"
      >
        {skill}
      </span>
    ))}
  </div>
</div>

{/* Divider */}
<div className="w-full border-t border-gray-700 my-5"></div>

{/* Languages Section */}
<div className="w-full">
  <p className="text-white font-semibold mb-3 uppercase tracking-wide">Languages</p>
  <div className="flex flex-wrap gap-2">
    {["English", "Hebrew"].map((lang) => (
      <span
        key={lang}
        className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs transition"
      >
        {lang}
      </span>
    ))}
  </div>
</div>

{/* Divider */}
<div className="w-full border-t border-gray-700 my-5"></div>

{/* Interests Section */}
<div className="w-full">
  <p className="text-white font-semibold mb-3 uppercase tracking-wide">Interests</p>
  <div className="flex flex-wrap gap-2">
    {["Coding", "Gaming", "Sports", "Music", "Traveling"].map((interest) => (
      <span
        key={interest}
        className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs transition"
      >
        {interest}
      </span>
    ))}
  </div>
</div>


      {/* Divider */}
      <div className="w-full border-t border-gray-700 my-4"></div>

      {/* Personal Website */}
      <div className="text-sm text-gray-400 text-center">
        <p className="mb-1">Portfolio Website:</p>
        <a
          href="https://benkatalan.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="text-teal-300 hover:underline"
        >
          benkatalan.netlify.app
        </a>
      </div>
    </aside>
  );
}

export default Header;
