import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function Cards(promp) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={promp.image}/>
      <Card.Body>
        <Card.Title>{promp.raza}</Card.Title>
        <Card.Text>{promp.description}
        </Card.Text>
      </Card.Body>
      <Tags color={promp.color} text={promp.text} />
    </Card>
  );
}

export default Cards;