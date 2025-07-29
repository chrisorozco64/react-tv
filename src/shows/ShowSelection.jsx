import "./shows.css";


/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  console.log(shows);
  return (
    <nav className="shows">
      {shows.map(show => (
        <a
          className="show"
          key={show.name} 
          href="#"
          onClick={e => {
            e.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}

    </nav>
  );
}

