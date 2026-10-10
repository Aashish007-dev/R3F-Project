import React from 'react';
import {useControls} from 'leva';
import FanGroup from './FanGroup';
import { OrbitControls } from '@react-three/drei';


const Experience = () => {

    const {x, y} = useControls({
        x: {
            value: 0,
            min: -4,
            max: 4,
            step: 0.01,
            label: "X-Position"
        },
        y: {
            value: 0,
            min: -4,
            max: 4,
            step: 0.01,
            label: "Y-Position"
        }
    })

  return (
    <>
        <ambientLight intensity={2} color={'#ffffff'}/>
        <OrbitControls />
        <FanGroup />
    </>
  )
}

export default Experience