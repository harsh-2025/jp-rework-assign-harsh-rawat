import { FaCss3, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

function Basic() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray_color text-element_color dark:bg-dark_color_new dark:text-dark_color">
      <h1 className="text-top_heading font-high_heading mb-4">Welcome to the JUSPAY Assignment</h1>
      <p className="text-mid_heading font-element_heading">Made by Harsh Rawat</p>
      <p className="text-element_heading mb-6">Email: harshofficialrawat@gmail.com</p>
      <p className="text-element_heading mb-8">Mobile: 9413918825</p>

      <div className="space-x-6">
        <Link to="/dashboard" className="bg-blue_color text-white px-4 py-2 rounded-lg hover:bg-dark_blue_color transition-all">
          Assignment
        </Link>
        
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Tech Stack Used:</h2>
          <div className="flex space-x-4 mt-2">
            <div className="flex items-center">

              <span className="ml-2 text-element_color">React</span>
            </div>
            <div className="flex items-center">

              <span className="ml-2 text-element_color">Tailwind CSS</span>
            </div>
            <div className="flex items-center">

              <span className="ml-2 text-element_color">Zustand</span>
            </div>
            <div className="flex items-center">

              <span className="ml-2 text-element_color">React Icons</span>
            </div>
            <div className="flex items-center">

              <span className="ml-2 text-element_color">Lucide React Icons</span>
            </div>
          </div>
        </div>
      {/* Style Guide Section */}
      <div className="mt-10 text-center">


        <h2 className="text-mid_heading font-high_heading">Style Guide</h2>
        <div className="mt-4">
          <h3 className="text-element_heading">Colors:</h3>
          <ul className="text-element_heading">
            <li><strong>Background Color (Light):</strong > #f7f9fb (gray_color)</li>
            <li><strong>Background Color (Dark):</strong> #1f2937 (dark_color)</li>
            <li><strong>Button Background:</strong> #B1D4E0 (blue_color)</li>
            <li><strong>Button Hover Color:</strong> #a9c5da (dark_blue_color)</li>
            <li><strong>Text Color:</strong> #333333 (element_color)</li>
            <li><strong>Gray Text Color:</strong> #BDBDBD (gray_color)</li>
            <li><strong>Dark Text Color:</strong> #fff1f5 (dark_color)</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-element_heading">Font Sizes:</h3>
          <ul className="text-element_heading">
            <li><strong>Main Heading:</strong> 1.8rem (top_heading)</li>
            <li><strong>Mid Heading:</strong> 1.1rem (mid_heading)</li>
            <li><strong>Subheading:</strong> 1.1rem (mid_heading)</li>
            <li><strong>Body Text:</strong> 0.8rem (element_heading)</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-element_heading">Font Weights:</h3>
          <ul className="text-element_heading">
            <li><strong>Main Heading Weight:</strong> 600 (high_heading)</li>
            <li><strong>Subheading Weight:</strong> 500 (top_heading)</li>
            <li><strong>Body Text Weight:</strong> 400 (element_heading)</li>
            <li><strong>Small Element Weight:</strong> 300 (small_element_heading)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Basic;
