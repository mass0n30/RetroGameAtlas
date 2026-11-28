const years = Array.from({ length: 39 }, (_, i) => 1974 + i);
const sortOptions = ["Rating", "Popularity", "Release Date"];

const categoryKeys = {
  Consoles: "platform",
  Genres: "genre",
  Developers: "developer",
};

export default function FilterDrop({
  filters,
  setFilters,
  gameData,
  setGameData,
  ui,
  setUi,
}) {
  function resetResults() {
    setUi((previous) => ({ ...previous, mount: true }));
    setGameData((previous) => ({ ...previous, index: 0 }));
  }

  function toggleItem(id, category) {
    const key = categoryKeys[category];
    if (!key) return;

    resetResults();

    setFilters((previous) => {
      const next = new Set(previous[key] ?? []);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return { ...previous, [key]: next };
    });
  }

  function toggleOrder(data) {
    resetResults();

    setFilters((previous) => ({
      ...previous,
      discover: false,
      order: {
        data,
        order: previous.order.data === data ? !previous.order.order : true,
      },
    }));
  }

  function toggleDiscover() {
    resetResults();

    setFilters((previous) => ({
      ...previous,
      search: "",
      discover: !previous.discover,
    }));

    setUi((previous) => ({
      ...previous,
      screenshotMode: true,
    }));
  }

  function toggleScreenshotMode() {
    setUi((previous) => ({
      ...previous,
      mount: true,
      screenshotMode: !previous.screenshotMode,
    }));
  }

  function clearFilters() {
    setFilters((previous) => ({
      ...previous,
      platform: undefined,
      genre: undefined,
      developer: undefined,
      year: { min: 1974, max: 2012 },
      search: "",
      order: { data: "Rating", order: true },
      discover: false,
    }));

    setGameData((previous) => ({ ...previous, index: 0 }));

    setUi((previous) => ({
      ...previous,
      mount: true,
      open: new Set(),
    }));
  }

  function closeDropdown(event) {
    if (event.key !== "Escape") return;

    event.preventDefault();
    event.currentTarget.open = false;
    event.currentTarget.querySelector("summary")?.focus();
  }

  return (
    <section
      className="w-full bg-primary-dark text-text"
      aria-label="Game filters"
    >
      <div className="flex w-full flex-wrap gap-4 p-4">
        {gameData?.categoryData.allData.map((section) => {
          const selected = filters[categoryKeys[section.category]];

          return (
            <details
              key={section.category}
              className="w-full"
              onKeyDown={closeDropdown}
            >
              <summary className="cursor-pointer py-2">
                {section.category} ({selected?.size ?? 0})
              </summary>

              <div className="flex w-full flex-wrap gap-x-6 gap-y-3 p-4">
                {section.array.map((item) => (
                  <label
                    key={item.id}
                    className="flex shrink-0 items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={selected?.has(item.id) ?? false}
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
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-4 py-3">
        <button
          type="button"
          onClick={toggleDiscover}
          aria-pressed={filters.discover}
        >
          {filters.discover ? "Discovering Games" : "Discover Games"}
        </button>

        <button
          type="button"
          onClick={toggleScreenshotMode}
          aria-pressed={ui.screenshotMode}
        >
          {ui.screenshotMode ? "Screenshot Mode" : "Cover Art Mode"}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 py-3">
        <span>Released</span>

        <YearDropdown
          year={filters.year}
          setFilters={setFilters}
          resetResults={resetResults}
          arg="min"
        />

        <span>to</span>

        <YearDropdown
          year={filters.year}
          setFilters={setFilters}
          resetResults={resetResults}
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
            aria-pressed={filters.order.data === option}
          >
            {option}
            {filters.order.data === option &&
              (filters.order.order ? " ↑" : " ↓")}
          </button>
        ))}
      </div>

      <button type="button" onClick={clearFilters}>
        Clear filters
      </button>
    </section>
  );
}

function YearDropdown({ year, setFilters, resetResults, arg }) {
  const selectedYear = year[arg];
  const compYear = year[arg === "min" ? "max" : "min"];

  function isInvalid(value) {
    if (value === "" || compYear === "" || compYear == null) return false;

    return arg === "min"
      ? Number(value) > Number(compYear)
      : Number(value) < Number(compYear);
  }

  function handleChange(event) {
    const value = event.target.value;
    if (isInvalid(value)) return;

    resetResults();

    setFilters((previous) => ({
      ...previous,
      year: {
        ...previous.year,
        [arg]: value === "" ? "" : Number(value),
      },
    }));
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

      {years.map((value) => (
        <option key={value} value={value} disabled={isInvalid(value)}>
          {value}
        </option>
      ))}
    </select>
  );
}