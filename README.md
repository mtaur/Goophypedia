# Goophypedia
* Recreates Wikipedia pages with animated gifs.
* Google animated image search scrape using npm __Nightmare__
* Wikipedia API is handled by npm __wtf_wikipedia__
* Displayed on page with __React.JS__
* Runs on __Node.js__/__express.js__

## It's a sequel!
https://github.com/mtaur/Goophy
This page will explain the image scraping technique.

## Good luck deploying this to a Heroku server
Seriously, Heroku doesn't support npm Nightmare or Electron in general.  If you can get it to work, I'd be glad to hear about it! mothwentbad@gmail.com

## Performance issues
Articles with a large number of sections will take a lot of time and processing power to run, and may not finish.  A separate parallel copy the Electron browser simulates a Google animated image search __for each section__ of the requested Wikipedia article.  Shorter articles, like _The More You Know_ and _Grumpy Cat_ have no performance issues, but _Wonder Woman_ or _Star Wars_ will take a long time and some image results will simply time out.  The faster your device, the better.

## Use:
* This is a Node.js application.  Run the command __node server__ in the console, then navigate to __localhost:3000__ in your web browser.
* Type a valid WIkipedia article title (or an invalid one for a fun alternative result).
* Wait.
* No seriously, wait. _(If you run additional searches before it finishes, the previous results can get pasted into the image rows. Terminating of old processes has not been implemented.)_
