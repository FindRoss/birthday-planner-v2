import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import Button from '../Button';
import { FormStyle, FormLayout, FormColHalf, FormColFull, FormRow, InputLabel, Input, Textarea, Message } from './FormElements';

import "react-datepicker/dist/react-datepicker.css";

const Form = ({ data, dates, message, handleAdd, handleEdit, type, slug }) => {
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [description, setDescription] = useState('');
  const [buttonText, setButtonText] = useState("ADD A DATE");
  const [nameBorder, setNameBorder] = useState('#E4E4E4');
  const [occasionBorder, setOccasionBorder] = useState('#E4E4E4');
  const [descriptionBorder, setDescriptionBorder] = useState('#E4E4E4');
  const [startDate, setStartDate] = useState(new Date());

  // let history = useHistory();

  const bordersDefault = () => {
    setNameBorder('#E4E4E4');
    setOccasionBorder('#E4E4E4');
    setDescriptionBorder('#E4E4E4');
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    /* return the borders back to original color */
    bordersDefault();


    if (type === "edit") {
      /* send form data to app.js */
      handleEdit(name, occasion, description, slug);

      // send the user back to the dates page but this is out of place!!!

    } else {
      /* send form data to app.js */
      handleAdd(name, occasion, description, startDate);

      /* reset values */
      setName('');
      setOccasion('');
      setDescription('');
    }

  }

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    if (type === "edit" && !isEmpty(data)) {
      const { name, occasion, description } = data;

      setName(name);
      setOccasion(occasion);
      setDescription(description);
      setButtonText("UPDATE")
    };
  }, [data, type]);

  return (
    <>
      {message.display ? <Message style={{ background: "#A7F3D0" }}>{message.text}</Message> : null}
      <FormStyle onSubmit={e => handleFormSubmit(e)} id="DateForm">
        <FormLayout>
          <FormColHalf>
            <FormRow>
              <InputLabel htmlFor="name">Who</InputLabel>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ borderColor: `${nameBorder}` }}
              />
            </FormRow>
          </FormColHalf>
          <FormColHalf>
            <FormRow>
              <InputLabel htmlFor="occasion">What</InputLabel>
              <Input
                type="text"
                id="occasion"
                name="occasion"
                placeholder="Birthday, Anniversary, or Event"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
                style={{ borderColor: `${occasionBorder}` }}
              />
            </FormRow>
          </FormColHalf>
          <FormColFull>
            <FormRow>
              <InputLabel>Start Date</InputLabel>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </FormRow>
          </FormColFull>
          <FormColFull>
            <FormRow>
              <InputLabel htmlFor="notes">Remember</InputLabel>
              <Textarea
                rows="4"
                type="message"
                id="description"
                name="description"
                placeholder="Some notes that might help"
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{ borderColor: `${descriptionBorder}` }}
              />
            </FormRow>
          </FormColFull>
        </FormLayout>
        <>
          <Button>
            <button type="submit" htmlFor="DateForm">{buttonText}</button>
          </Button>
        </>
      </FormStyle>
    </>
  )
}

export default Form;


{/* <div>
  <FormRow>
    <InputLabel htmlFor="day">Day</InputLabel>
    <Select id="day" name="day" onChange={e => setDay(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </Select>
  </FormRow>
  <FormRow>
    <InputLabel htmlFor="month">Month</InputLabel>
    <Select id="month" name="month" onChange={e => setMonth(e.target.value)}>
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </Select>
  </FormRow>
</div> */}
