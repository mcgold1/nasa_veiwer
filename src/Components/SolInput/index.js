import React from 'react';
import { Input } from '@material-ui/core';
import './index.css';

const SolInput = (props) => {
  const onChange = (event) => {
    props.setSol(event.target.value)
    props.run()
  }
  return (
    <span>
      <p className="solText">Sol</p>
      <Input 
        className="solInput"
        defaultValue={0}
        onChange={onChange}
        label="Sol"
      />
    </span>
  )
}

export default SolInput