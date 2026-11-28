
import { useNavigate } from "react-router-dom";
import {
  Home,
  Compass,
  Gamepad2,
  Bookmark,
  ChartNoAxesColumnIncreasing,
  BookOpen,
  Play,
  Heart
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const buttonClass =
    "flex items-center gap-3 rounded-lg px-md py-3 text-left";
  const iconClass = "h-5 w-5 shrink-0";

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col bg-backgroundAlt p-lg pt-sm md:flex">
      <div className="mb-10 flex items-center gap-sm px-sm py-md">
        <img
          src="/logo/originallogo.png"
          alt=""
          className="h-10 w-10 shrink-0 object-contain"
        />
        <span className="text-lg font-bold text-primary-light">
          RetroGameAtlas
        </span>
      </div>

      <nav className="flex flex-col gap-sm">
        <button 
        onClick={() => navigate("/home")}
        className={buttonClass}>
          <Home className={iconClass} />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => navigate("/home/discover")}
          className={`${buttonClass} bg-primary/10`}
        >
          <Compass className={iconClass} />
          <span>Discover</span>
        </button>

        <button disabled className={buttonClass}>
          <Gamepad2 className={iconClass} />
          <span>My collection</span>
        </button>

        <button disabled className={`${buttonClass} text-muted`}>
          <Bookmark className={iconClass} />
          <span>Watchlist</span>
        </button>

        <button className={`${buttonClass} text-muted`}>
          <ChartNoAxesColumnIncreasing className={iconClass} />
          <span>Speedruns</span>
        </button>

        <button className={`${buttonClass} text-muted`}>
          <BookOpen className={iconClass} />
          <span>Eras & Platforms</span>
        </button>
      </nav>
        <section className="mt-auto border-t border-white/15 px-sm pt-5 pb-2 text-text">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
            Your Atlas
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Bookmark className="h-5 w-5 shrink-0 text-primary" />
              <span className="w-8 shrink-0 font-semibold tabular-nums">87</span>
              <span className="text-sm text-muted">In Collection</span>
            </div>

            <div className="flex items-center gap-3">
              <Play className="h-5 w-5 shrink-0 text-primary" />
              <span className="w-8 shrink-0 font-semibold tabular-nums">4</span>
              <span className="text-sm text-muted">Currently Playing</span>
            </div>

            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 shrink-0 text-primary" />
              <span className="w-8 shrink-0 font-semibold">56</span>
              <span className="text-sm text-muted">Want to Play</span>
            </div>
          </div>
        </section>
    </aside>
  );
};

export default Sidebar;

