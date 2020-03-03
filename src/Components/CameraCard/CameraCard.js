/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Card } from '@material-ui/core';
import './CameraCard.css'

const CameraCard = (props) => {
  return (
    <Card
      className="cameraCard"
    >
      <h3>{props.name}</h3>
      <img 
        src={props.src}
        className="cardImage"
      />
      <p>Total: {props.total}</p>
    </Card>
  )
}

export default CameraCard