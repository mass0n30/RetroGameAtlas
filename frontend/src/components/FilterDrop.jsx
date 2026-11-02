import { resetFilters } from "../helpers";

const years = Array.from({ length: 36 }, (_, i) => 1977 + i);
const sortOptions = ["Rating", "Popularity", "Release Date"];

export default function FilterDrop({
  categoryData,
  orderData,
  orderDirection,
  setOrder,
  setPlatform,
  setGenre,
  setYear,
  setDeveloper,
  platform,
  genre,
  developer,
  minyear,
  maxyear,
  setSearch,
  discover,
  setDiscover,
  screenshotMode,
  setScreenshotMode,
  setOpen,
  setMount,
  setIndex,
}) {
  const selected = {
    Consoles: platform,
    Genres: genre,
    Developers: developer,
  };

  const setters = {
    Consoles: setPlatform,
    Genres: setGenre,
    Developers: setDeveloper,
  };

  function toggleItem(id, category) {
    const setter = setters[category];
    if (!setter) return;

    setMount(true);
    setIndex(0);

    setter((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  function toggleOrder(data) {
    setMount(true);
    setDiscover(false);
    setIndex(0);

    setOrder((previous) => ({
      data,
      order: previous.data === data ? !previous.order : true,
    }));
  }

  function toggleDiscover() {
    setMount(true);
    setSearch("");
    setScreenshotMode(true);
    setIndex(0);
    setDiscover((previous) => !previous);
  }

  function toggleScreenshotMode() {
    setMount(true);
    setScreenshotMode((previous) => !previous);
  }

  function clearFilters() {
    setIndex(0);

    resetFilters(
      setPlatform,
      setDeveloper,
      setGenre,
      setYear,
      setOrder,
      setSearch,
      undefined,
      setMount,
      setOpen,
      setDiscover
    );
  }

  function closeDropdown(event) {
    if (event.key !== "Escape") return;

    event.preventDefault();
    event.currentTarget.open = false;
    event.currentTarget.querySelector("summary")?.focus();
  }

  return (
    <section className="w-full" aria-label="Game filters">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "16px", width: "100%" }}>
        {categoryData.map((section) => (
          <details
            key={section.category}
            className="w-full"
            onKeyDown={closeDropdown}
          >
            <summary className="cursor-pointer py-2">
              {section.category} ({selected[section.category]?.size ?? 0})
            </summary>

            <div className="flex w-full flex-wrap gap-x-6 gap-y-3 p-4">
              {section.array.map((item) => (
                <label key={item.id} className="flex shrink-0 items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected[section.category]?.has(item.id) ?? false}
                    onChange={() => toggleItem(item.id, section.category)}
                  />

                  <span>
                    {section.category === "Consoles"
                      ? item.displayabbrev || item.name
                      : item.name}
                  </span>
                </label>
              ))}
            </div>
          </details>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 py-3">
        <button type="button" onClick={toggleDiscover} aria-pressed={discover}>
          {discover ? "Discovering Games" : "Discover Games"}
        </button>

        <button
          type="button"
          onClick={toggleScreenshotMode}
          aria-pressed={screenshotMode}
        >
          {screenshotMode ? "Screenshot Mode" : "Cover Art Mode"}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 py-3">
        <span>Released</span>

        <YearDropdown
          selectedYear={minyear}
          compYear={maxyear}
          setYear={setYear}
          setMount={setMount}
          setIndex={setIndex}
          arg="min"
        />

        <span>to</span>

        <YearDropdown
          selectedYear={maxyear}
          compYear={minyear}
          setYear={setYear}
          setMount={setMount}
          setIndex={setIndex}
          arg="max"
        />
      </div>

      <div
        className="flex flex-wrap items-center gap-4 py-3"
        role="group"
        aria-label="Sort games"
      >
        <span>Sort by</span>

        {sortOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => toggleOrder(option)}
            aria-pressed={orderData === option}
          >
            {option}
            {orderData === option && (orderDirection ? " ↓" : " ↑")}
          </button>
        ))}
      </div>

      <button type="button" onClick={clearFilters}>
        Clear filters
      </button>
    </section>
  );
}

function YearDropdown({
  selectedYear,
  compYear,
  setYear,
  setMount,
  setIndex,
  arg,
}) {
  function isInvalid(year) {
    if (year === "" || compYear === "" || compYear == null) return false;

    return arg === "min"
      ? Number(year) > Number(compYear)
      : Number(year) < Number(compYear);
  }

  function handleChange(event) {
    const value = event.target.value;
    if (isInvalid(value)) return;

    setMount(true);
    setIndex(0);
    setYear((previous) => ({ ...previous, [arg]: value }));
  }

  return (
    <select
      aria-label={arg === "min" ? "Earliest release year" : "Latest release year"}
      value={selectedYear ?? ""}
      onChange={handleChange}
    >
      <option value="">
        {arg === "min" ? "Any start" : "Any end"}
      </option>

      {years.map((year) => (
        <option key={year} value={year} disabled={isInvalid(year)}>
          {year}
        </option>
      ))}
    </select>
  );
}