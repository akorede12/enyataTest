import "./globals.css";

// Import all main page components
import Home from "./page";
// import Login from "./login";
// import OverviewSection from "./overviewSection";
import PeopleSection from "./peopleSection";
import SpeciesSection from "./speciesSection";
import StarshipsSection from "./starshipsSection";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Main application structure */}
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}

export {
  Home,
  Login,
  OverviewSection,
  PeopleSection,
  SpeciesSection,
  StarshipsSection
};
