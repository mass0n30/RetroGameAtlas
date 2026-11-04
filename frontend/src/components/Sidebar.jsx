
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
      <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col bg-backgroundAlt p-lg pt-sm md:flex">

        <div className="border mb-10 flex items-center gap-sm px-sm py-md">
          <img
            src="/logo/originallogo.png"
            alt=""
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg text-primary-light font-bold">RetroGameAtlas</span>
        </div>

        <nav className="flex flex-col gap-sm">
          <button
            disabled
            className="rounded-lg px-md py-3 text-left"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate('/home')}
            className="rounded-lg bg-primary/10 px-md py-3 text-left"
          >
            Discover
          </button>

          <button
            disabled
            className="rounded-lg px-md py-3 text-left"
          >
            My collection
          </button>

          <button
            disabled
            className="rounded-lg px-md py-3 text-left text-muted"
          >
            Watchlist
          </button>
        </nav>
      </aside>
  );
};

export default Sidebar;