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
    <div className='w-full bg-background h-20 flex items-center justify-between p-lg bg-red border-b border-background-light fixed z-50'>
      <nav className='w-[1200px] h-20 flex items-center justify-between p-lg border-b border-background-light fixed z-50'>
      <div className='flex w-full items-center gap-4'>

        <form
          className='flex flex-1 items-center gap-2'
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchInput);
          }}>
          <input
            className='flex flex-1 border bg-foreground w-full border-border-light rounded-md p-2'
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
          <button className='flex items-center justify-center p-2' type="submit">
            <Search size={16} aria-hidden="true" />
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


