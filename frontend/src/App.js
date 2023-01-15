import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import axios from 'axios';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Dates from './components/Dates';
import Date from './components/Date';
import EditDate from './components/EditDate';
import Message from './components/Message';

function App() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(true);
  const [message, setMessage] = useState({
    display: false,
    text: "This is really inspiring dummy text",
    type: "success"
  });


  // GET events
  const getData = async () => {
    const res = await axios.get('http://localhost:5000/events');
    if (res.status !== 200) setError(true);
    setEvents(res.data);
    setError(false);
  };

  useEffect(() => {
    getData();
  }, []);

  // POST event
  const addData = async (data) => await axios.post('http://localhost:5000/events/add', data);

  // EDIT event
  const editData = async (data, slug) => await axios.post(`http://localhost:5000/events/update/${slug}`, data);

  // DELETE event 
  const deleteData = async (slug) => await axios.delete(`http://localhost:5000/events/${slug}`)

  // Good article on how to do this as a custom Hook. Its cool!
  // https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
  const updateLocalData = (updatedDate, slug) => {
    const dateIndex = events.findIndex(event => event._id === slug);
    const filterEvents = events.filter(event => event._id !== slug);
    filterEvents.splice(dateIndex, 0, updatedDate);
    setEvents(filterEvents);
  }

  const handleAdd = async (name, occasion, description, startDate) => {
    const dateObj = {
      username: "Rossco",
      name,
      occasion,
      description,
      startDate
    }
    // add event to the backend
    const response = await addData(dateObj);
    dateObj._id = response.data._id;
    // add event to the local data
    const newArr = [...events, dateObj];
    setEvents(newArr);
    setMessage({
      display: true,
      text: "A new date has been added!",
      sort: "success",
    });
  };

  // Delete
  const handleDelete = async (slug) => {
    const newArr = events.filter(event => event._id !== slug);

    const res = await deleteData(slug);

    if (res.status === 200) {
      setEvents(newArr);

      // Can get a message here too! 
      setMessage({
        display: true,
        text: "Date Deleted",
        sort: "success",
      });
    }
  }

  // Edit
  const handleEdit = async (name, occasion, description, slug) => {
    // New object
    const dateObj = {
      _id: slug,
      username: "Rossco",
      name,
      occasion,
      description
    }
    // Post update to API. 
    const response = await editData(dateObj, slug);
    if (response.status === 200) {
      // here update the local state. 
      updateLocalData(dateObj, slug);
      // success message
      setMessage({
        display: true,
        text: response.data,
        sort: "success",
      });
      setTimeout(() => {
        console.log('successfully sent. Why not redirect.');
        window.location.replace('/dates');
      }, 2000)
    }

  };

  // const handleSetMessage = (errorMessage) => {
  //   setMessage({
  //     display: true,
  //     text: errorMessage,
  //     sort: "error",
  //   });
  // };


  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Form dates={events} message={message} handleAdd={handleAdd} />} />
        <Route exact path="/dates/" element={<Dates dates={events} error={error} />} />
        <Route exact path="/dates/:topicId" element={<Date dates={events} error={error} handleDelete={handleDelete} />} />
        <Route path="/dates/:topicId/edit/" element={<EditDate dates={events} handleEdit={handleEdit} message={message} />} />
      </Routes>
      {message.display ? <Message message={message} setMessage={setMessage} /> : null}
    </BrowserRouter>
  );
}

export default App;
