import { Link } from "react-router-dom";

interface DashboardSideMenuItemProps {
  isActive: boolean;
  to: string;
  labelText: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
}

export const DashboardSideMenuItem = (props: DashboardSideMenuItemProps) => {
  return (
    <li>
      <Link to={props.to}>
        <div
          className={`hover:bg-gray-100 flex items-center space-x-3 py-2 px-6 ${
            props.isActive ? "text-primary" : ""
          }`}
        >
          <props.icon className="w-4 h-4 text-gray-400 fill-current" />
          <span>{props.labelText}</span>
        </div>
      </Link>
    </li>
  );
};
