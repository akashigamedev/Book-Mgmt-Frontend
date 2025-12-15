import { Outlet } from "react-router";
import useAuthStore from "../../features/auth/useAuthStore";
import { MdLogout } from "react-icons/md";
import logout from "../api/logout.api";

const UserLayout = () => {
  const authData = useAuthStore((s) => s.data);
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-center items-center min-h-20">
        <div className="w-full flex justify-between items-center max-w-[1440px]">
          <div className="flex items-center gap-2">
            <h4>Book Management System</h4>
            <span className="border border-(--border-secondary) rounded-full px-4 py-2">
              Demo
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="size-10 aspect-square bg-(--sb-valencia-bg-active) hover:bg-(--sb-valencia-bg-hover) active:bg-(--sb-valencia-bg-on-press) flex justify-center items-center rounded-full cursor-pointer"
              onClick={logout}
            >
              <MdLogout />
            </div>
            <div className="size-10 aspect-square bg-(--surface-bg-secondary) flex justify-center items-center rounded-full font-bold! cursor-pointer">
              {authData?.name.split(" ").map((w) => w.at(0)?.toUpperCase())}
            </div>
          </div>
        </div>
      </div>
      <main className="max-w-[1440px] mx-auto mt-4 h-full max-h-[calc(100dvh-120px)] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
