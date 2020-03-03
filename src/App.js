import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import './App.css';
import { isUndefined } from 'util';
import CameraCard from './Components/CameraCard/CameraCard';
import SolInput from './Components/SolInput';
import CameraSelector from './Components/CameraSelector';

function App() {
  const [camera, setCamera] = useState(["fahz","rhaz","mast","chemcam","mahli","mardi","navcam"])
  const [sol, setSol] = useState(0)
  const [info, setInfo] = useState({})
  const [photos, setPhotos] = useState([])
  const apiKey = '28UyXDHNvyC7paK0Q0V5s2mHx8iv9DUJBTYg6b0l'
  const cameraAbrToFull = {
     fahz: "Front Hazard Avoidance Camera", 
     rhaz: "Rear Hazard Avoidance Camera",
     mast: "Mast Camera",
     chemcam: "Chemistry and Camera Complex",
     mahli: "Mars Hand Lens Imager",
     mardi: "Mars Descent Imagerx",
     navcam: "Navigation Camera",
  }

  const runQuery = () => fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`)
    .then(res => res.json())
      .then(result => {
        setInfo(result)
        setPhotos(result.photos)
      })

  console.log(info)

  const totals = {}

  photos.forEach((photo) => {
    if (isUndefined(totals[photo.camera.name])) {
      totals[photo.camera.name] = {total: 0, sample: photo.img_src, name: photo.camera.full_name}
    } else {
      totals[photo.camera.name].total = totals[photo.camera.name].total + 1 
    }
  })

  console.log(totals)
  console.log(CameraCard)

  const cameraCards = camera.map((key) =>
   <CameraCard
      src={totals[key.toUpperCase()] ? totals[key.toUpperCase()].sample : undefined}
      name={cameraAbrToFull[key]}
      total={totals[key.toUpperCase()] ? totals[key.toUpperCase()].total : 0}
    />
  )

  console.log(cameraCards)
  console.log(camera)

  return (
    <div className="App">
      <header className="App-header">
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-around"
        className="header"
      >
        <CameraSelector 
          camera={camera}
          setCamera={setCamera}
        />
        <SolInput 
          setSol={setSol}
          run={runQuery}
        />
        
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {cameraCards}
      </Grid>
      </header>
    </div>
  );
}

export default App;
