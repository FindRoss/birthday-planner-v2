import { Center, Rotate, Icon } from './LoadingElements';

function Loading() {
  return (
    <Center>
      <Rotate>
        <Icon><i className="fas fa-circle-notch"></i></Icon>
      </Rotate>
    </Center>
  )
}

export default Loading;
