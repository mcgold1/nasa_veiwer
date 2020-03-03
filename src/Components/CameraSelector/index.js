import React from 'react';
import { Button, Checkbox, Popover, Grid } from '@material-ui/core';
import './index.css';

const CameraSelector = (props) => {
  const {camera, setCamera} = props
  const onChange = (name) => (event) => {
    if (event.target.checked) {
      setCamera(camera.concat([name]))
    } else {
      setCamera(camera.filter(cam => cam !== name))
    }
  }
  
  const selectAll = () => {
    setCamera(["fahz","rhaz","mast","chemcam","mahli","mardi","navcam"])
  }
  const clear = () => {
    setCamera([])
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
    <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
      {camera.length} cameras selected
    </Button>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
      >
        <Button onClick={selectAll}>
          Select All
        </Button>
        <Button onClick={clear}>
          Clear
        </Button>
        <Grid
          container
          direction="row"
        >
          <Checkbox
            checked={camera.indexOf('fahz') > -1}
            value="fahz"
            label="Front Hazard Avoidance Camera"
            onChange={onChange("fahz")}
          />
          <p>Front Hazard Avoidance Camera </p>
        </Grid>
        <Grid
          container
          direction="row"
        >
          <Checkbox
            checked={camera.indexOf('rhaz') > -1}
            value="rhaz"
            label="Rear Hazard Avoidance Camera"
            onChange={onChange("rhaz")}
          />
          <p>Rear Hazard Avoidance Camera </p>
        </Grid>
        <Grid
          container
          direction="row"
        >
          <Checkbox
            checked={camera.indexOf('mast') > -1}
            value="mast"
            label="Mast Camera"
            onChange={onChange("mast")}
          />
          <p>Mast Camera </p>
        </Grid>
        <Grid
          container
          direction="row"
        >
          <Checkbox
            checked={camera.indexOf('chemcam') > -1}
            value="chemcam"
            label="Chemistry and Camera Complex"
            onChange={onChange("chemcam")}
          />
          <p>Chemistry and Camera Complex </p>
        </Grid>
        <Grid
          container
          direction="row"
        >
          <Checkbox
            checked={camera.indexOf('mahli') > -1}
            value="mahli"
            label="Mars Hand Lens Imager"
            onChange={onChange("mahli")}
          />
          <p>Mars Hand Lens Imager </p>
        </Grid>
        <Grid
          container
          direction="row"
        >
          <Checkbox
            checked={camera.indexOf('mardi') > -1}
            value="mardi"
            label="Mars Descent Imagerx"
            onChange={onChange("mardi")}
          />
          <p>Mars Descent Imagerx </p>
        </Grid>
        <Grid
          container
          direction="row"
        >
          <Checkbox
            checked={camera.indexOf('navcam') > -1}
            value="navcam"
            label="Navigation Camera"
            onChange={onChange("navcam")}
          />
          <p>Navigation Camera </p>
        </Grid>
      </Grid>
    </Popover>
    </>
  )
}

export default CameraSelector