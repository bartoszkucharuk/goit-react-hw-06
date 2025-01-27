import './App.css';
import { RiContactsBook3Line } from "react-icons/ri";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";


function App() {
  return (
    <>
      <h1>Phonebook <RiContactsBook3Line size="40" /></h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App
