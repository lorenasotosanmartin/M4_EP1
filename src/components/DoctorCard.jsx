import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
export default function Doctorcard(doctor) {


  return (
    <>
        <Card className="p-0" >
          <Card.Img variant="top" src={doctor.doctor.imagen}/>
          <Card.Body>
            <Card.Title>{doctor.doctor.nombre}</Card.Title>
            <Card.Title className='fst-italic'>{doctor.doctor.especialidad}</Card.Title>
            <Card.Text>
              {doctor.doctor.descripcion}
            </Card.Text>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="me-2" aria-label="First group">
                <Button>Reservar cita <i className="button__icon bi bi-clipboard"></i> </Button>
                <Button>Conoce más <i className="button__icon bi bi-chevron-right"></i></Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Body>
        </Card>
      </>
  );
}