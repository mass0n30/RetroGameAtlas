Project Details
PERN, REST, JWT Auth, Prisma, Seeding/Scripting, Object property mapping, 

What I practiced for this project:
  Frontend:
    - Keeping endpoints clean, fewest amount of URL params, for easier navigation and mounting for saving states.
    - Making CLS performance good, using loader div containers to preload DOM space.
  Backend:
    - Following REST, letting HTTP verbs and param make the route clear of function.

Built using twitch IGDB API: https://www.igdb.com/api 
Speedrun API: https://github.com/speedruncomorg/api/blob/master/version1/README.md 

Responsive Images, for better loading times, using smaller images
from IGDB with t_medium, or t_thumb, ect
https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images  (srcset tag**)

Icons: https://lucide.dev/icons/ 

CLS: I improved my Culmative Layout Shift by reserving space in DOM with loader cards for cover art and screenshot images in GameCard.jsx

Ebay Game Props:
 data.itemSummaries.  
  - Condition
  - image.imageUrl
  - itemWebUrl
  - price.value & price.currency
  - title (actual ebay listing title)


***************

  DONE:
  - query for all genres, platforms, developers, years upon mount
  - pass value category props to HomePage component
  - pass setState category props to SideBar component
  - map out all elements for all categories using id keys 
  - replace the t_thumb in screenshot URLS for larger size
  - look into normalizing the screenshot dimensions 
  - fix error when refreshing details page
  - fix sliding down page upon details load in
  - normalize dashes other symbols for search
  - Upon category selection, page must reset (remount), upon retrieiving more games doesn't refresh
  - adding additional filter logic for order by
  - clear search value upon category change (not sure 100% working?)
  - discover games selection route (filter logic still applying?)
  - screenshot image object fit discovering by screenshot (most are 1080x720) (screenshot thumbs replaced for big for mapping them on discovery route)
  - Add no cover holder for no cover art so cells aren't offset
  - ***Look at the Metrics under peformance where culmative shift is poor, ect (image dimensions)
  - Adding star pattern as background, perhaps overly GIF, for background (scroll container width smaller and transluscent to keep background height 100% and static while scrolling, in active navbar while scrolling is 50% opacity)
  - adding custom loader
  - maybe put in Twitch data for World record speed runs?
  - maybe integrate ebay API for price data and ebay listing links
  - fix duplicate game card keys (preventing DOM errors)
  - fix CLS
  - fix game card loader animation delay iterations
    - upon navigating back from game details, have no loader cards for seamless navigation
- Add a share feature on Game details page? Sharing to socials or email.
- add admin delete games
  - finish up sidebar cateogories container (flexing category containers nicely upon selection *reference resume project)
    - let categories flex container flex 3 over rest of containers to give category rows the most room upon flexing... (flexing makes sidebar height full??)
  - Game Details page Screenshots in a carosel?

TODO:
  - !Add Related Games Section in Game Details
  - Make a component for alert messages (like for saved games if no saved games, or no game results upon search, ect.)
  - Make a alert component for alerts (saved to games, ect)
  - Embed ebay listing onto details page?
  - Add animation and sound? to heart selection
  - put ebay listings as 'related listings (good amount does not have exact title listings, more so related listings, perhaps I can improve this looking back through ebay api docs)
  - game name tags on image covers/screenshots? (lots of japanese/foreign titles in images)

  - for related data (runs and ebay listings), numbered series title's causes related data (runs and ebay) to list other games in a collection: http://localhost:5173/home/details/10192 


  - Get rating scores, and rating count on game cards for Rating? Put in Game Details as well. 
  - Position heart not overlaying cover art in corner more aligned
  - add transparent loader skeleton in main scroll container for wave animation upon navigation back, while game cards load in
  - adding details like an icon next to 'no more results' at bottom of fetches, ect. (broken controller icon on error page, ect)
  - fix slight space side bar between scroll wheel and rows
  - add user dislike options for inaccuracy feedback (filter by most votes to replace for more accuracy by admin, user can report inaccurate speedrun data, video data, game data, ect)
  - design Game Details page (layout on paper sketch considering flex on mobile)
      - maybe add some related games section in Game Details (this may not be too difficult, inital Grab Same Titles if same developer, fallback grab games in same genre and console?)
  - Populate more Wii games, populate PSP titles and atari 2600 ?
  - put social links in a popout from clicking a share Icon on gamedetail page ( next to heart icon )
  - Improve getting Record Type on details page (level, Any%, ect)?
  - Typography improvements, especially on gameDetails page (font for paragraphs, headers, giving icons more stroke width over text labels? etc)

  - Re look into design principles for UI and consider mobile React wrapper? before further design changes
  - market game value from PriceCharting API (adding a extra API will add an additional fetch to game details, further slowing down load, need work around or fast loading, *OR get a median price from ebay purchased listings?)
  - adding MVP features, user features 
  - adding additional user features(completed games list, watch list)?
  - maybe add tag group components in main body, for better user exp?
  - maybe replace my custom Form with more cohesive Form Component Library

  *Big feauture idea: Index loads in on landing page, it is user sorta dashboard greeting user, showing most recent comments from users on any given game page, and a selection to begin finding games, continuing where they left off or going to saved games. (a bit grandiose, but perhaps a bit of a commenting system and engagement for users). 
  
Production tasks
  - adding user accessibility (keyboard shortucts)
  - handling errors on client side form API (redirect on 401 error code to login)
  - Maybe integrating Ebay's Buy API for affiliate buying on Game Details pages, listing to buy next to embedded videos. 

Ebay: 
  - Category ID subject to change for ebay price data?: https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#uri.filter 



FRONTEND:

Pseudo for Sidebar category:
  - query dependency re mounts for data
  - 
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


Design:

For this project I believe desktop first will be fine, I want to establish how I should modularize my css moving forward, along with other things.
Will implement BEM practice (Block, Element and Modifier)



BACKEND:

Image size docs: https://api-docs.igdb.com/#reference

Cache Image responses (screenshots): https://api-docs.igdb.com/#images

I plan to cache a catalog of games storing lots of the more popular,
upon user search if game not in db hit IGDB API for request. Cover images and screenshots 


pseudo:
 - save by year/platform route post requests 
 - json data recieved
 - await save games
 - iterate through games function to map to new obj
 - map function awaits getCover for url
 - getCover: if game has cover ID, request cover data to return
 - in createController create cover for foreign cover table


# PERN-Starter-Template
Starter template, using PERN stack, keeping backend and frontend in seperate directories. 


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
FRONTEND directory:

Design: Keep CSS inline or modular

npm install - sets up all node modules (installs all dependencies)

npm run dev - starts vite server

If using React to setup up default frontend directory run: 
npm create vite@latest . -- --template react


This template uses Prisma ORM supporting PostgreSQL. 
Prisma Setup Guide: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgresql 
or use quick commands: 
 ---> npx prisma init  (then after adding DATABASE_URL to .env)  ---> npx prisma migrate dev --name init  ---> npx prisma generate

Don't forget to setup .env where variables such as DATABASE_URL(where data is being served) will go
.gitignore has .env and /generated/schema to ignore from public 

Using PostMan Web Agent (for full API functionality): https://learning.postman.com/docs/getting-started/installation/installation-and-updates/#install-postman-on-linux   (after installing with snap command, just run 'postman' as a command to launch)

npm install -g nodemon --live view? 

Linter & Prettier Commands
npm install --save-dev eslint
npx eslint --init   (Optional for configuration)  

Linting commands
- Run: npx eslint .
- Fix: npx eslint . --fix

Prettier commands
- npm install --save-dev prettier
- touch .prettierrc  (Optional config file for tab space, ect. )