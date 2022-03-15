import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from 'axios';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Dates from './components/Dates';
import Date from './components/Date';
import EditDate from './components/EditDate';


function App() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(true);

  // GET events
  const getData = async () => {
    const res = await axios.get('http://localhost:5000/events');
    if (res.status !== 200) {
      setError(true);
    }

    setEvents(res.data);
    setError(false);
  };

  // POST event
  const addData = async (data) => await axios.post('http://localhost:5000/events/add', data);

  // EDIT event
  const editData = async (data, slug) => await axios.post(`http://localhost:5000/events/update/${slug}`, data);

  // DELETE event 
  const deleteData = async (slug) => await axios.delete(`http://localhost:5000/events/${slug}`)


  const updateLocalData = (updatedDate, slug) => {
    const dateIndex = events.findIndex(event => event._id === slug);
    const filterEvents = events.filter(event => event._id !== slug);
    filterEvents.splice(dateIndex, 0, updatedDate);
    setEvents(filterEvents);
  }

  useEffect(() => {
    getData();
  }, []);

  const [message, setMessage] = useState({
    display: false,
    text: "",
    sort: "",
  });

  // Remove the message after x seconds
  useEffect(() => {
    if (message.display === true && message.sort === "success") {
      setTimeout(() => {
        setMessage({
          display: false,
          text: "",
          sort: ""
        })
      }, 2000);
    }
  }, [message])


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
    }
    // send user to dates
  };

  // const handleSetMessage = (errorMessage) => {
  //   setMessage({
  //     display: true,
  //     text: errorMessage,
  //     sort: "error",
  //   });
  // };


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Form
            dates={events}
            message={message}
            handleAdd={handleAdd}
          />
        </Route>
        <Route exact path="/dates/">
          <Dates
            dates={events}
            error={error}
          />
        </Route>
        <Route exact path="/dates/:topicId">
          <Date
            dates={events}
            error={error}
            handleDelete={handleDelete}
          />
        </Route>
        <Route path="/dates/:topicId/edit/">
          <EditDate
            dates={events}
            handleEdit={handleEdit}
            message={message}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
