import { useState } from 'react';
import { Tree, TreeItem, TreeItemContent, Button } from 'react-aria-components';
import styles from '../styles/components/sidebar.module.css';
import { resetFilters } from '../helpers';
import { useEffect } from 'react';
import  SectionTreeItem  from './SectionTreeItem';

 // eslint-disable-next-line react/prop-types
export default function SideBar({ categoryData, orderData, orderDirection, setOrder, setPlatform, setGenre, setYear, setDeveloper, platform, genre, developer, minyear, maxyear, setSearch, discover, setDiscover, screenshotMode, setScreenshotMode, SetLoading, open, setOpen, setMount}) {

    function toggleItem(id, category) {

      setMount(true);
      setSearch("");

      if (category == "Consoles") {
        const newSet = new Set(platform);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setPlatform(newSet);
      } else if (category == "Developers") {
        const newSet = new Set(developer);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setDeveloper(newSet);
      } else if (category == "Genres") {
        const newSet = new Set(genre);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setGenre(newSet);
      }
  };

  const handleToggleOrder = (dataType) => {
    setMount(true);
    setDiscover(false);
    if (orderData === dataType) {
      setOrder(prevOrder => ({
        data: dataType,
        order: prevOrder.order === true ? false : true
      }));
    } else {
      setOrder({
        data: dataType,
        order: true
      });
    }
  };

  // upon discovering games toggle, reset category filters
  const handleDiscoverGames = () => {
    resetFilters(setPlatform, setDeveloper, setGenre, setYear, setOrder, setSearch, setScreenshotMode, setMount, setOpen);
    setMount(true);
    setSearch("");
    discover ? setDiscover(false) : setDiscover(true);
  };

  const handleDiscoverMode = () => {
    setMount(true);
    screenshotMode ? setScreenshotMode(false) : setScreenshotMode(true);
  }

  return (
    <div id={styles.sidebarcontainer}>
      <div id={styles.clearfilterscontainer}>
        <Button onClick={() => resetFilters(setPlatform, setDeveloper, setGenre, setYear, setOrder, setSearch, undefined, setMount, setOpen)}>Clear Filters</Button>
      </div>
      <div className={styles.categoriescontainer}>
        <Tree aria-label="Categories"
          >
          {categoryData.map((section) => (
            <TreeItem key={section.category} id={section.category} className={styles.treeItem} textValue={section.category}>
              <TreeItemContent className={styles.categoryheader}>
               <div className={styles.categoryheadertxt}> {section.category}</div>
              </TreeItemContent>

              {section.array.map((item) => ( 
                <TreeItem key={item.name} id={item.name} textValue={item.name} > 
                  <SectionTreeItem open={open} setOpen={setOpen} category={section.category} itemname={item.name} itemId={item.id} toggleItem={toggleItem}/>
                </TreeItem>

              ))}
            </TreeItem>
          ))}  
        </Tree>
      </div>
      <div className={styles.yearsfiltercontainer}>
        <YearDropdown className={styles.yearSelect} selectedYear={minyear} compYear={maxyear} setSelectedYear={setYear} arg={"min"}/>
        <YearDropdown className={styles.yearSelect} selectedYear={maxyear} compYear={minyear} setSelectedYear={setYear} arg={"max"}/>
      </div>
      <div className={styles.orderfiltercontainer}>
        <div id='orderbydata'>
          <Button onClick={() => handleToggleOrder("Release Date")}>
            Order by Release Date {orderData === "Release Date" ? (orderDirection === true ? "↓" : "↑") : ""}
          </Button>
        </div>
        <div id='orderbyrating'>
          <Button onClick={() => handleToggleOrder("Rating")}>
            Order by Rating {orderData === "Rating" ? (orderDirection === true ? "↓" : "↑") : ""}
          </Button>
        </div> 
        <div id='orderbypopularity'>
          <Button onClick={() => handleToggleOrder("Popularity")}>
            Order by Popularity {orderData === "Popularity" ? (orderDirection === true ? "asc" : "desc") : ""}
          </Button>
        </div>

      </div>
        <div id={styles.discovermodecontainer}>
          <Button onClick={() => handleDiscoverGames()} style={discover ? { backgroundColor: '#6200ffff', color: '#ffffffff' } : {backgroundColor: '#ffffffff'}}>
            {discover ? "Show All Games" : "Discover Games"}
          </Button>
            <Button onClick={handleDiscoverMode}>
              {screenshotMode ? "Discover By Cover Art" : "Discover By Screenshot"}
            </Button>
        </div>
    </div>
  );
}

// preventing invalid year selections
function handleSetYear(compYear, setSelectedYear, arg, e) {

  if (arg == "min" && parseInt(e) > parseInt(compYear)) {
    return;
  } else if (arg == "max" && parseInt(e) < parseInt(compYear)) {
    return;
  }

  setSelectedYear (prev => (arg == "min" ? ({ ...prev, min: e }) : ({...prev, max: e})));
}


// eslint-disable-next-line react/prop-types
const YearDropdown = ({ selectedYear, compYear, setSelectedYear, arg }) => {
  const years = [ 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006 ];

  return (
    <select
      value={selectedYear}
      onChange={(e) => handleSetYear(compYear,setSelectedYear ,arg, e.target.value )}
    >
      <option value="">All Years</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};
