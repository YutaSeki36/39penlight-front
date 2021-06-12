import React, { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox'

const App: React.FC<any> = props => {
  const [idolListStatus] = useState<Idols>(initData)

  return (
    <div className="App">
      <header>
       <h2>39ペンライト</h2>
      </header>
      <div className="global_wrapper">
        <div>
          <ul className="color_box">
            {idolListStatus.idols.map((idol, i)=> {
              return(
                <ColorBox
                key={i}
                colorCode={idol.colorCode}
                idolName={idol.name}
              />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface Idols {
  idols: IdolDetail[]
}

interface IdolDetail {
  name: string
  colorCode: string
}

const initData: Idols = {
  idols: [
    {
      name: "みらい",
      colorCode: "#ea5b76",
    },
    {
      name: "しずか",
      colorCode: "#6495cf",
    },
    {
      name: "つばさ",
      colorCode: "#fed552",
    },
    {
      name: "たまき",
      colorCode: "#ee762e",
    },
    {
      name: "えみりー",
      colorCode: "#554171",
    },
    {
      name: "れいか",
      colorCode: "#6bb6b0",
    },
    {
      name: "しほ",
      colorCode: "#afa690",
    },
    {
      name: "ひなた",
      colorCode: "#d1342c",
    },
    {
      name: "うみ",
      colorCode: "#e9739b",
    },
    {
      name: "かおり",
      colorCode: "#ea5b76",
    },
    {
      name: "かおり",
      colorCode: "#ea5b76",
    },
  ]
}


export default App;
