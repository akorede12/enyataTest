import "./globals.css";

import Home from "./page";
import OverviewSection from "./overview/page";
import PeopleSection from "./people/page";
import SpeciesSection from "./species/page";
import StarshipsSection from "./starships/page";

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
