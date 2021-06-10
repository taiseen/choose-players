import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SinglePlayer = (props) => {
    const { player, btn } = props;
    const { name, photo, salary } = player;

    const boxStyle = {
        width: '250px',
    }
    const imgStyle = {
        width: '200px',
    }

    return (
        <div className="col-md-3">
            <Card className="m-2 p-3 align-items-center" style={boxStyle} >
                <Card.Img src={photo} alt={name} style={imgStyle} className="mb-3" />
                <Card.Title>{name}</Card.Title>
                <Card.Text>${salary}</Card.Text>

                <Button className="btn btn-primary" onClick={() => btn(player)}>
                    <FontAwesomeIcon icon={faPlusCircle} /> Add
                </Button>
            </Card>
        </div>
    );
};

export default SinglePlayer;