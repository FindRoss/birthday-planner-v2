import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { Section, FormWrapper, FormStyle, FormLayout, FormColThird, FormColFull, FormRow, InputLabel, Input, Textarea } from './FormElements';
import Container from '../Container';

import "react-datepicker/dist/react-datepicker.css";

const Form = ({ data, handleAdd, handleEdit, type, slug }) => {
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [description, setDescription] = useState('');
  const [buttonText, setButtonText] = useState("ADD A DATE");
  const [nameBorder, setNameBorder] = useState('#E4E4E4');
  const [occasionBorder, setOccasionBorder] = useState('#E4E4E4');
  const [descriptionBorder, setDescriptionBorder] = useState('#E4E4E4');
  const [date, setDate] = useState(new Date());

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
      handleAdd(name, occasion, description, date);

      /* reset values */
      setName('');
      setOccasion('');
      setDescription('');
    }
  }

  const dateFormatter = (date = new Date()) => {

    let yyyy = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    let mm = (month < 10) ? `0${month}` : `${month}`;
    let day = date.getDate();
    let dd = (day < 10) ? `0${day}` : `${day}`;

    return `${yyyy}-${mm}-${dd}`;
  }

  const handleAddDate = (e) => {
    const dateObj = new Date(e.target.value);

    setDate(dateObj);
  }

  const isEmpty = (obj) => Object.keys(obj).length === 0;

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
    <Section>
      <Container>
        <FormWrapper>
          <FormStyle onSubmit={e => handleFormSubmit(e)} id="DateForm">
            <FormLayout>
              <FormColThird>
                <FormRow>
                  <InputLabel htmlFor="name">Who</InputLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Kayden"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={{ borderColor: `${nameBorder}` }}
                  />
                </FormRow>
              </FormColThird>
              <FormColThird>
                <FormRow>
                  <InputLabel htmlFor="occasion">What</InputLabel>
                  <Input
                    type="text"
                    id="occasion"
                    name="occasion"
                    placeholder="Birthday"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    style={{ borderColor: `${occasionBorder}` }}
                  />
                </FormRow>
              </FormColThird>
              <FormColThird>
                <FormRow>
                  <InputLabel>When</InputLabel>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    onChange={(e) => handleAddDate(e)}
                    value={dateFormatter(date)}
                    min={dateFormatter()}
                    max="2050-12-31"></Input>
                </FormRow>
              </FormColThird>
              <FormColFull>
                <FormRow>
                  <InputLabel htmlFor="notes">Notes</InputLabel>
                  <Textarea
                    rows="4"
                    type="message"
                    id="description"
                    name="description"
                    placeholder="Get an awesome gift for his birthday!"
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
        </FormWrapper>
      </Container>
    </Section>
  )
}

export default Form;