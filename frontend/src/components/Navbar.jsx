import { useEffect, useState } from 'react';
import { useDebounce } from '../helpers';
import { Link, useNavigate } from 'react-router-dom';
import  NavMenu  from './reactMUI/Menu';
import  {House} from 'lucide-react';
import { ArrowLeft, Ellipsis, X, PanelsTopLeft, Funnel, Search } from 'lucide-react';
import { resetFilters } from '../helpers';
import FilterDrop from './FilterDrop';


// eslint-disable-next-line react/prop-types
export default function Navbar({ ui, setUi, filters, setFilters, gameData, setGameData, setStatus }) {

  const [searchInput, setSearchInput] = useState(filters.search || '');

  const navigate = useNavigate();

  const handleSearch = (value) => {
    setFilters(prev => ({
      ...prev,
      platform: undefined,
      developer: undefined,
      genre: undefined,
      year: { min: 1974, max: 2012 },
      order: { data: "Rating", order: true },
      discover: false,
      search: value,
    }));

    setUi(prev => ({
      ...prev,
      screenshotMode: false,
      open: new Set(),
    }));

    navigate('/home');
  };


return (
  <div className="fixed top-0 z-50 w-full border-b border-border bg-background">
    <nav className="relative flex h-20 w-full items-center px-4 sm:px-6">

      <form
        className="flex w-full min-w-0 items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchInput);
        }}
      >
        <input
          className="  w-[clamp(140px,75vw,1400px)] 
          rounded-md border border-border bg-foreground p-2 text-text"
          type="text"
          placeholder="Search games..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);

            if (e.target.value === "") {
              setFilters((prev) => ({
                ...prev,
                search: "",
              }));
            }
          }}
        />

        <div className="flex shrink-0 items-center gap-2">
          <button
            className="flex shrink-0 items-center justify-center p-2"
            type="submit"
            aria-label="Search games"
          >
            <Search size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() =>
              setUi((prev) => ({
                ...prev,
                toggle: !prev.toggle,
              }))
            }
            className="flex shrink-0 items-center gap-2 p-2 text-sm text-zinc-400"
          >
            <Funnel size={18} aria-hidden="true" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </form>

      <section
        className={`filter ${ui.toggle ? "open" : "closed"}`}
      >
        {ui.toggle && gameData.categoryData && (
          <FilterDrop
            filters={filters}
            setFilters={setFilters}
            ui={ui}
            setUi={setUi}
            categoryData={gameData.categoryData.allData}
            setStatus={setStatus}
            setGameData={setGameData}
          />
        )}
      </section>

    </nav>
  </div>
)};
