![App Screenshot](https://github.com/RodrigoJPT/same-vibe/blob/dev/public/Screenshot.png?raw=true)

# SameVibe

A school project app for finding music similar to a given song using listening data from the [last.fm API](https://www.last.fm/api)

## Technologies Used:

- [React](https://reactjs.org/docs/getting-started.html)
- [Last.fm API](https://www.last.fm/api)

## Getting Started:

### Users:

Simply search for a song you know you love. If we can find it, we should be able to find similar music (:

### Devs:

Fork, clone, and cd into the repository in your terminal. Run npm install to install the dependencies, then head over to [Last.fm](https://www.last.fm/api) to create an account and get your own API key. Once you've recieved it, use it locally by creating a .env.local final in the root directory. In there, create the variable REACT_APP_LASTFM_KEY=[Your API key here, no quotes]. Run npm start and have at it!

## Contribution Guidelines:

Please use issues to submit bugs or propose improvements. This is a class project, so there were some limitations. Mainly that the api security couldn't be more complex than a simple key, so no oAuth api's like the more robust Spotify api. Unfortunately, the last.fm api started to lose a lot of functionality because of licensing issues. The big challenges were getting actual album images back and finding ways to have music sample playback on the page. That stuff would be super cool to figure out or see how someone else would solve it!
