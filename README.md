RetroGamingAtlas
A full-stack game discovery and collection platform for exploring 25k+ titles with fast filtering, rich game detail pages, and user features and libraries (Saved / Completed).

My Project Write Up Blog Post --> https://7thingscreativethink.blogspot.com/2026/01/my-first-full-stack-application.html

Github: https://github.com/mass0n30
Live: https://retro-game-atlas.vercel.app/

Add Project screenshots eventually: https://www.reddit.com/r/github/comments/15crgsq/how_do_i_add_images_into_my_readme_and_keep_them/

### Discovery
- Browse **25k+ games** with limitless filters (platform, genre, year range, developer, etc.)
- Multiple browse modes (cover mode / screenshot mode)
- Discovery mode with limitless filters and browse modes, enabling users to find new games
- Search with fast query + sorting
- Infinite scrolling with **state persistence** (filters + scroll position restored on back navigation)

### Game Details
- Rich detail page with embedded screenshots/videos
- Related games navigation (deep navigation supported with back navigation history)
- External integrations (twitch, ebay APIs) loaded asynchronously

### Accounts & Libraries
- Authentication with protected endpoints
- Guest mode (browse freely; prompts users to sign up when attempting account-only actions)
- Save games / mark completed
- Shareable game pages



## Tech Stack

**Frontend**
- React + Vite [Context / React Query / Loaders / etc.]
- Vanilla CSS Modules / Inline styling
- Luicide Iconography
- MUI (where used)
- Cross device media responsiveness

**Backend**
- Node.js + Express
- PostgreSQL
- Prisma

**Integrations**
Built using twitch IGDB API: https://www.igdb.com/api 
- [IGDB] for game metadata  
- [YouTube/Twitch/etc.] for media embeds
- [eBay] for market listings  https://developer.ebay.com/api-docs
- [Speedrun.com] for speedrun data https://github.com/speedruncomorg/api/blob/master/version1/README.md 

---

## Architecture Overview

RetroGameAtlas is designed around a **fast core dataset** populated/stored and normalized in the local database, with richer data loaded on-demand.

- The **Discover** experience is powered by lightweight API responses optimized for browsing.
- The **Game Details** page mounts client ready data for instant load in, while asynchronously fetching for further data (speedrun data, listings, related listings), preventing waterfalling.

---

## Data & Performance Strategy

- **Normalized DB schema**: core game metadata stored locally to reduce repeated external requests and simplify frontend rendering.
- **Pagination + infinite scroll**: list endpoints return paginated results; client supports endless scrolling.
- **UI state persistence**: filters and scroll position are saved and restored when navigating back from details.
- **Hydration model**: details render immediately from core data, while external services load in parallel with loading states + fallbacks.

---

### Prerequisites
- Node.js [version]
- PostgreSQL [version]

# install
npm install (run in both backend and frontend)

# Fill in DATABASE_URL, API keys, etc.


What I practiced for this project:
  Frontend:
    - Keeping endpoints clean, fewest amount of URL params, for easier navigation and mounting for saving states.
    - Making CLS performance 'good', using loader div containers to preload DOM space.
    - Vanilla CSS modules and inline styling
    - Preventing waterfall issues - handling Loader and Mounting states + Lifting State + Lazy Loading
    - 
  Backend:
    - Following REST
    - Schema logic (constraints, segregating sensitive User info, Prisma client, seeding, etc)
    - Route management, JWT authentication, Passport

Built using twitch IGDB API: https://www.igdb.com/api 
Speedrun API: https://github.com/speedruncomorg/api/blob/master/version1/README.md 

Responsive Images, for better loading times, using smaller images
from IGDB with t_medium, or t_thumb, ect
https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images  (srcset tag**)

Icons: https://lucide.dev/icons/ 

CLS: I improved my Culmative Layout Shift by reserving space in DOM with loader cards for cover art and screenshot images in GameCard.jsx

https://css-tricks.com/css-only-carousel/  Sliding carosoel effect
***************

  DONE:
  - query for all genres, platforms, developers, years upon mount
  - pass value category props to HomePage component
  - pass setState category props to SideBar component
  - map out all elements for all categories using id keys 
  - replace the t_thumb in screenshot URLS for larger size
  - look into normalizing the screenshot dimensions 
  - normalize dashes other symbols for search
  - Upon category selection, page must reset (remount), upon retrieiving more games doesn't refresh
  - adding additional filter logic for order by
  - clear search value upon category change (not sure 100% working?)
  - discover games selection route (filter logic still applying?)
  - screenshot image object fit discovering by screenshot (most are 1080x720) (screenshot thumbs replaced for big for mapping them on discovery route)
  - Add no cover holder for no cover art so cells aren't offset
  - ***Look at the Metrics under peformance where culmative shift is poor, ect (image dimensions)
  - adding custom loader
  - maybe put in Twitch data for World record speed runs?
  - maybe integrate ebay API for price data and ebay listing links
  - fix duplicate game card keys (preventing DOM errors)
  - fix CLS
  - Rework fetching on gameDetails, implementing lazy loading fixing waterfalling problem, fetching gamedetails fast for users, before ebay + twitch data load in below on page. 
  - fix game card loader animation delay iterations
    - upon navigating back from game details, have no loader cards for seamless navigation
- add admin delete games
- finish up sidebar cateogories container (flexing category containers nicely upon selection *reference resume project)
  - let categories flex container flex 3 over rest of containers to give category rows the most room upon flexing... (flexing makes sidebar height full??)
- Game Details page Screenshots in a carosel?
- Make a alert component for alerts (saved to games, ect)
- design Game Details page (layout on paper sketch considering flex on mobile)
- Populate more Wii games, populate PSP titles and atari 2600 ?
- adding MVP features, user features 
- Typography improvements, especially on gameDetails page (font for paragraphs, headers, giving icons more stroke width over text labels? etc)
- put social links in a popout from clicking a share Icon on gamedetail page ( next to heart icon )
- !Add Related Games Section in Game Details
- Prisma studio filter to clean up filler games, may need raw sql for screenshots 
- Add guest account option (null out SavedGames or like or completing games (Give option to sign up))
- double check over loading and mounting upon navigation in details, add minimal fade ins for game details
-filter icon as an indication
    (upon a search user should know filters are on clearly, so can reset if they are on and not correct results)
-! set Database prod URL in command line and set NES/SNES games from Wii games Original platforms by years in Prisma studio
- Speedrun CSS container design ** (making sure all videos embed or else no video info container?)
- constrain ebay image sizes for consistency?
- modal all images
- improve relatedGames listings with updated multiple genres fetched,
add the genres on gamedetails as well
- add profile dashboard
- setup vite config for PWA for mobile

TODO:
  - add an about/external links + feedback section on dashboard?
  - searbar result drop down debounce?
  - icons sidebar
  - add In Progress column for games
  - add Ebay affiliate tracking? (for first release iteration) 
  - add toggle timer for category side bar (resetting to default after selections)
  - possible artwork section from fetch for next to video section to fill a bit of space?

  - additional styling touchup, fade-ins, skeleton loader improvements,
  gameDetails header changes, color gradients in containers like nav and sidebar, padded containers around videos (or CRT graphic??) ect. 

  Mobile: 
    - outside of design responsiveness for mobile viewports, android chrome, ect. browsers have stricter security, adding credentials to session headers needed. 
    Fetch more doesn't seem to work in mobile

  - Improve search query with fetching for games taking space out of query if no results, ect
  - Make a component for alert messages (like for saved games if no saved games, or no game results upon search, ect.)
  - Add animation and sound? to heart selection

  - adding details like an icon next to 'no more results' at bottom of fetches, ect. (broken controller icon on error page, ect)
  - fix slight space side bar between scroll wheel and rows

  - Re look into design principles for UI and consider mobile React wrapper? before further design changes
  - market game value from PriceCharting API (adding a extra API will add an additional fetch to game details, further slowing down load, need work around or fast loading, *OR get a median price from ebay purchased listings?)
  - adding additional user features(completed games list, watch list)?
      - User can save ebay listings? Upon retrieving saved can display status (Sold, Bids, Ect.?)
  - maybe add tag group components in main body, for better user exp?

  *Big feauture idea: Index loads in on landing page, it is user sorta dashboard greeting user, showing most recent comments from users on any given game page, and a selection to begin finding games, continuing where they left off or going to saved games. (a bit grandiose, but perhaps a bit of a commenting system and engagement for users). 


Production tasks
  - Add OAuth for Signup with Google / Facebook
  - eBay Partner Network sign up?
  - adding user accessibility (keyboard shortucts)
  - handling errors on client side form API (redirect on 401 error code to login)
  - Maybe integrating Ebay's Buy API for affiliate buying on Game Details pages, listing to buy next to embedded videos. 

  Social Interaction (if gathering any traffic)
    - User Profile Dashboard, shows Retro Collection, Completed Games (maybe times),
    - On Dashboard can show anon activities (Anon User added XGame to completed, ect.)
    - Users can browse others users dashboards and add as friends, maybe DM, trade. 
    - Collapsable comments on Details page



  The Repos Deployment Process for this Full-Stack PERN project: 
    - Setup new Railway Project environment for backend
    - Started new PostgreSQL database instance, taking DATABASE_URL
    - pg_dump all my data of 25k games to PostgreSQL db
    - Connected backend node.js repo, plugging in DATABASE_URL and SECRET to .env variables before deploying.
    - Setup a new Vercel project for frontend connecting Railway's URL API for REST fetch
    - Added Vercel URL API to URL param endpoints in React locally
    - Added all my service .env variables (Ebay and Twitch) Client ID/Secrets to Railway
    - Hoisted ebay and twitch access tokens server side, checking for saved access token in memory and exp variable


Ebay: 
  - Category ID subject to change for ebay price data?: https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#uri.filter 



FRONTEND:


Feature I want to build is having a random screenshot generation on a page with 
endless scrolling. Clicking on a random given screenshot will take you to the game details page, this gives a nostalgic yet modern discovery feeling to it. Could maybe do this for all sections for the app, or pagination. Perhaps I should look at the library
first.
Can possibly use Framer Motion React library for this seamless transition scroll.
screenshots stored to IGDBs CDN amazon cloud server enables this, as load times latency issues shouldn't be an issue.
This could be helpful as far as lining up screenshots in grid: https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-responsive-images

10/18 UPDATE: Framer Motion React doesn't seem to have what I am looking for - although useful to know about.
Here is an article on using the library Reacts Infinite Scroll:
https://builtin.com/articles/react-infinite-scroll 

(ScrollRestoration) https://api.reactrouter.com/v7/functions/react_router.ScrollRestoration.html

I am looking for endless scrolling where data fetches upon scrolling to 'next page'. One problem that should be addressed is 'saving state' upon user navigating off of where they scrolled. 
This article addresses this, along with other problems caused by infinite scrolling: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/

Possibly use these loader animations:
https://www.reddit.com/r/react/comments/1gm3wxc/react_spinner_toolkit_new_npm_package/



BACKEND:

Image size docs: https://api-docs.igdb.com/#reference

Cache Image responses (screenshots): https://api-docs.igdb.com/#images


# Production Setup

Commands:
Commands in BACKEND directory!
npm install (installs all dependencies found in package.json)

npm install supertest --save-dev (for testing) (scripts in package.json)


PRISMA:
npm install prisma --save-dev
npm install @prisma/client
npx prisma init  (makes prisma folder)
npm install @quixo3/prisma-session-store  https://github.com/kleydon/prisma-session-store#readme   (set up Session Model in Prisma) 


npx prisma generate (after making schema)
npx prisma migrate dev (after making changes to schema)
 ----------------------------------------------------------------------


Linter & Prettier Commands
npm install --save-dev eslint
npx eslint --init   (Optional for configuration)  

Linting commands
- Run: npx eslint .
- Fix: npx eslint . --fix

Prettier commands
- npm install --save-dev prettier
- touch .prettierrc  (Optional config file for tab space, ect. )