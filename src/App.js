import { Provider } from "react-redux";
import { store } from "./data/store";
import notesApi from "./data/services/notes";

const { useGetNotesQuery } = notesApi;

function NotesCount(props) {
  const { data, error, isLoading } = useGetNotesQuery();
  if (error) {
    return <p>Error ... {JSON.stringify(error)}</p>;
  }
  const notes = data || [];
  return <p>Total {notes.length} notes</p>;
}

function Notes(props) {
  const { data, error, isLoading } = useGetNotesQuery();
  if (error) {
    return <p>Error ... {JSON.stringify(error)}</p>;
  }
  const notes = data || [];

  return (
    <ul style={{ listStyle: "none" }}>
      {notes.map((note) => (
        <li>
          ({note.id}) {note.text}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NotesCount />
        <Notes />
      </div>
    </Provider>
  );
}
