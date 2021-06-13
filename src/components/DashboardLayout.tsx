import { ReactNode } from "react";

import { DashboardSideMenu } from "./DashboardSideMenu";
import { DashboardTopBar } from "./DashboardTopBar";

interface DashboardLayoutProps {
  children: ReactNode;
  name: "home" | "settings";
  title: string;
}

export const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex-col min-w-lg">
      <DashboardTopBar />
      <div className="flex h-full">
        <DashboardSideMenu activeTab={props.name} />
        <div className="w-full h-full overflow-hidden">
          <div className="mt-20 p-6 w-full h-full overflow-y-scroll">
            <div className="border-b border-gray-300 w-full pb-2 mb-6">
              <h1 className="text-2xl">{props.title}</h1>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
