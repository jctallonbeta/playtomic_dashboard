import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as SettingsIcon } from "../assets/settings.svg";
import { DashboardSideMenuItem } from "./DashboardSideMenuItem";

interface DashboardSideMenuProps {
  activeTab: "home" | "settings";
}

export const DashboardSideMenu = ({ activeTab }: DashboardSideMenuProps) => {
  return (
    <div className="flex-none bg-white h-full w-44 border-r border-gray-200 shadow-lg pt-24">
      <nav>
        <ul>
          <DashboardSideMenuItem
            to="/"
            isActive={activeTab === "home"}
            icon={HomeIcon}
            labelText="Home"
          />
          <DashboardSideMenuItem
            to="/settings"
            isActive={activeTab === "settings"}
            icon={SettingsIcon}
            labelText="Settings"
          />
        </ul>
      </nav>
    </div>
  );
};
