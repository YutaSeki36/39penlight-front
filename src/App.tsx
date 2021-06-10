import React, { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox'

const App: React.FC<any> = props => {
  const [idolListStatus, setIdolListStatus] = useState<Idols>(initData)

  return (
    <div className="App">
      <header>
       <p>39ペンライト</p>
      </header>

      {idolListStatus.idols.map(idol=> {
        return(
          <ColorBox
          key={idol.colorCode}
          colorCode={idol.colorCode}
          idolName={idol.name}
        />
        )
      })}
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

  ]
}


export default App;
