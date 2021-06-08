import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SelectedMiniInfo = ({ playersInfo, remove }) => {

    const { id, photo, name, salary } = playersInfo;

    const imgStyle = {
        width: '100px',
    }

    return (
        <Card className="align-items-center mb-3 pt-3">
            <Card.Img src={photo} style={imgStyle} className="" />
            <Card.Body>
                <Card.Title><b>Name:</b> {name}</Card.Title>
                <Card.Text><b>Salary:</b> ${salary}</Card.Text>
                <Button variant="danger" onClick={() => remove(id)}>Remove</Button>
            </Card.Body>
        </Card>
    );
};

export default SelectedMiniInfo;