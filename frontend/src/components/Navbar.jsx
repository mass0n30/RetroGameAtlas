import { useEffect, useState } from 'react';
import { useDebounce } from '../helpers';
import { Link, useNavigate } from 'react-router-dom';
import  NavMenu  from './reactMUI/Menu';
import  {House} from 'lucide-react';
import { ArrowLeft, Ellipsis, X, PanelsTopLeft, Funnel } from 'lucide-react';
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
    <div className='w-full h-16 flex items-center justify-between px-4 bg-primary border-b border-background-light fixed top-0 z-50'>
    <nav className='w-full h-16 flex items-center justify-between px-4 bg-primary border-b border-background-light fixed top-0 z-50'>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchInput);
          }}>
          <input
            type="text"
            placeholder="Search games..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (e.target.value === '') {
                setFilters(prev => ({ ...prev, search: '' }));
              }
            }}
          />
          <button type="submit">
            <img src="/icons/search.png" alt="search" />
          </button>
        </form>
    <div onClick={() => setUi(prev => ({ ...prev, toggle: !prev.toggle }))} className="mr-1 flex items-center gap-2 px-1 text-sm text-zinc-400">
      <Funnel size={16} aria-hidden="true" />
      <span>Filters</span>
    </div>
      </div>

    <section className={`filter ${ui.toggle ? "open" : "closed"}`}>
      { ui.toggle && gameData.categoryData && ( <FilterDrop
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
  );
}


