/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react"
import { tvShows } from "./shows/data";
console.log(tvShows)
  console.log({tvShows})
  console.log(tvShows[0].episodes)
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";


export default function App() {
  const [selectedShow, setSelectedShow] = useState();
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows = {tvShows} setSelectedShow={setSelectedShow}/>
      </header>
      <main>
        <ShowDetails show ={selectedShow}/>
      </main>
    </>
  );
}
