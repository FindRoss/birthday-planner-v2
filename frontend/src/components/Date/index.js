import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Moment from 'react-moment';

import Container from '../Container';
import Button from '../Button';
import Loading from '../Loading';
import { Section, Body, DateCard, DateType, Heading, Description, ButtonBar } from './DateElements';


function Date({ dates, handleDelete }) {

  let { topicId } = useParams();

  const isLoading = dates.length === 0;
  const data = dates.filter(date => date._id === topicId)[0];

  if (isLoading) {
    return (
      <Loading />
    )
  } else {
    return (
      <Section>
        <Container>
          <Body>

            <DateCard className="headingLayout__box">
              <Moment format="Do MMMM">{(data.startDate)}</Moment>
            </DateCard>

            <Heading>
              <div className="headingLayout__box">
                <DateType>{data.occasion}</DateType>
                <h1>{data.name}</h1>
              </div>
            </Heading>

            <Description>{data.description}</Description>
          </Body>

          <ButtonBar>
            <Link to={`/dates/${topicId}/edit/`}>
              <Button>
                <button>EDIT DATE</button>
              </Button>
            </Link>
            <Link to={'/dates/'}>
              <Button>
                <button onClick={() => handleDelete(topicId)}>Delete</button>
              </Button>
            </Link>
          </ButtonBar>

        </Container>
      </Section >
    )
  }
}

export default Date;

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];




