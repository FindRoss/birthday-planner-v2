import { useParams } from "react-router-dom";

import Container from '../Container';
import Button from '../Button';
import Loading from '../Loading';
import { Section, DateCard, DateType, HeadingLayout, Description } from './DateElements';

import { Link } from "react-router-dom";

function Date({ dates, handleDelete }) {

  let { topicId } = useParams();


  const isLoading = dates.length === 0;
  const data = dates.filter(date => date._id === topicId)[0];

  console.log('dates in date.js', dates);

  if (isLoading) {
    return (
      <Loading />
    )
  } else {
    return (
      <Section>
        <Container>
          <HeadingLayout>
            <div className="headingLayout__box">
              <DateType>{data.occasion}</DateType>
              <h1>{data.name}</h1>
            </div>
            <DateCard className="headingLayout__box">
              <div>1 January</div>
            </DateCard>
          </HeadingLayout>
          <Description>{data.description}</Description>
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
        </Container>
      </Section >
    )
  }
}

export default Date;

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];




