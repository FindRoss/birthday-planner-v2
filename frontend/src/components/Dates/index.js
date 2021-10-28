import Container from '../Container';
import Loading from '../Loading';

import { Section, CardsLayout, DateCard, CardDate, CardDateMonth, CardInfo, CardType, CardName, HeadingBox, HeadingParagraph } from './DatesElements';

import { Link } from "react-router-dom";

function Dates({ dates, error }) {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const isLoading = (dates.length === 0) && (error === true);


  // this becomes a function i reuse in the dates loop - pass in the date!
  if (dates.length !== 0) {
    console.log(dates[0].startDate)

    const oldStartDate = dates[0].startDate;

    const newStartDate = new Date(oldStartDate);

    // 1-31
    const startDay = newStartDate.getDay();

    // 0-11
    const startMonth = newStartDate.getMonth();

    console.log("The first occasion begins on: ", startDay, months[startMonth]);
  }



  // const firstDate = firstOne.getDate();

  // console.log(firstDate);

  if (isLoading) {
    return <Loading />
  }

  const datesOutput = (
    dates.map((date, i) => (
      <Link to={`/dates/${date._id}`} key={i} className="dates-card__link">
        <DateCard>
          <CardDate>
            <CardDateMonth>1 JAN</CardDateMonth>
          </CardDate>
          <CardInfo>
            <CardType>{date.occasion}</CardType>
            <CardName>{date.name}</CardName>
          </CardInfo>
        </DateCard>
      </Link>
    ))
  );

  const noDatesOutput = (
    <div>Sorry, no dates found</div>
  );

  const errorOutput = (
    <div>There has been an error!</div>
  )

  return (
    <Section>
      <Container>
        <HeadingBox>
          <h1>Dates</h1>
          <HeadingParagraph>See the dates here that matter the most to you, the ones you really want to remeber. Sort by type, and create alets for the dates that you really do not want to forget. Last time you will need to say sorry to your Mum.</HeadingParagraph>
        </HeadingBox>
        {error ? (
          errorOutput
        ) : (
          <CardsLayout>
            {(dates.length !== 0) ? datesOutput : noDatesOutput}
          </CardsLayout>
        )}
      </Container>
    </Section >
  )
}

export default Dates

