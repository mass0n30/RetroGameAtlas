import React from "react";

const Sidebar = () => {
  const items = ["Dashboard", "Discover", "My Collection", "WatchList"];

  return (
    <aside className="min-h-screen w-60 shrink-0 bg-gray-900 p-4 text-white">
      <div className="mb-6 flex items-center gap-2">
        <img
          className="h-10 w-10 object-contain"
          src="/logo/originallogo.png"
          alt=""
        />
        <h1 className="text-lg font-bold">RetroGameAtlas</h1>
      </div>

      <nav>
        <ul className="m-0 list-none space-y-3 p-0">
          {items.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="w-full cursor-pointer rounded-lg border-0 bg-gray-800 px-4 py-3 text-left text-white transition-colors hover:bg-gray-700"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;