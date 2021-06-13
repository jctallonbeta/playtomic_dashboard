import { useTsSelector } from "../hooks/useTsSelector";
import { signOut } from "../services/firebase/auth";

export const DashboardTopBar = () => {
  const session = useTsSelector((state) => state.session);

  return (
    <div className="fixed top-0 h-20 w-full flex justify-between items-center bg-primary-dark text-white py-4 px-6 shadow-md">
      <div className="text-xl select-none">Dashboard</div>
      <div className="flex flex-col justify-end">
        <div>{session.user?.name || "Unknown"}</div>
        <button
          className="text-xs text-right text-green-100 hover:text-primary-lightest outline-none focus:outline-none"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
