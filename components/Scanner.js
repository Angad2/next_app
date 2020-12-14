// import React, { Component } from 'react';
// import Quagga from 'quagga';

// export default class Scanner extends Component {
//     constructor(props) {
//         super(props);
//         this._onDetected = this._onDetected.bind(this);
//     }

//     componentDidMount() {
//         Quagga.init(
//             {
//                 inputStream: {
//                     type: 'LiveStream',
//                     constraints: {
//                         width: 640,
//                         height: 480,
//                         facingMode: 'environment', // or user
//                     },
//                 },
//                 locator: {
//                     patchSize: 'medium',
//                     halfSample: true,
//                 },
//                 numOfWorkers: 2,
//                 decoder: {
//                     readers: ['upc_reader'],
//                 },
//                 locate: true,
//             },
//             function(err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 Quagga.start();
//             }
//         );
//         Quagga.onDetected(this._onDetected);
//     }

//     componentWillUnmount() {
//         Quagga.offDetected(this._onDetected);
//     }

//     _onDetected(result) {
//         this.props.onDetected(result);
//     }

//     render() {
//         return <div id="interactive" className="viewport" />;
//     }
// }

import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';
// import styles from './QrReader.module.css';

const config = {
    "inputStream": {
        "type": "LiveStream",
        "constraints": {
            "width": 300,
            "height": 300,
            "facingMode": "environment",
            "aspectRatio": { "min": 1, "max": 2 }
        }
    },
    "locator": {
        "patchSize": "medium",
        "halfSample": true
    },
    "numOfWorkers": 2,
    "frequency": 10,
    "decoder": {
        "readers": ["code_128_reader"]
    },
    "locate": true
}

const Index = () => {
    
    useEffect(() => {
        Quagga.init(config, err => {
          if (err) {
            console.log(err, "error msg");
          }
          Quagga.start();
          return () => {
            Quagga.stop()
          }
        });
    
        Quagga.onDetected(detected);
      }, []);


      const detected = (result) =>{
        console.log('result',result)
      }

        return (
            <div id="interactive" className={["viewport", styles.divContainer].join(' ')} />
        )
    }

export default Index;