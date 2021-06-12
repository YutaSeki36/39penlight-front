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
      colorCode: "#274079",
    },
    {
      name: "みなこ",
      colorCode: "#58a6dc",
    },
    {
      name: "かれん",
      colorCode: "#b63b40",
    },
    {
      name: "みなこ",
      colorCode: "#58a6dc",
    },
    {
      name: "えれな",
      colorCode: "#9bce92",
    },
    {
      name: "じゅりあ",
      colorCode: "#d7385f",
    },
    {
      name: "つむぎ",
      colorCode: "#ebe1ff",
    },
    {
      name: "ももこ",
      colorCode: "#efb864",
    },
    {
      name: "さよこ",
      colorCode: "#7f6575",
    },
    {
      name: "ことは",
      colorCode: "#92cfbb",
    },
    {
      name: "ともか",
      colorCode: "#bee3e3",
    },
    {
      name: "まつり",
      colorCode: "#5abfb7",
    },
    {
      name: "めぐみ",
      colorCode: "#454341",
    },
    {
      name: "ふうか",
      colorCode: "#7278a8",
    },
    {
      name: "いく",
      colorCode: "#f7e78e",
    },
    {
      name: "すばる",
      colorCode: "#aeb49c",
    },
    {
      name: "ゆりこ",
      colorCode: "#c7b83c",
    },
    {
      name: "ちづる",
      colorCode: "#f19557",
    },
    {
      name: "あかね",
      colorCode: "#eb613f",
    },
    {
      name: "せりか",
      colorCode: "#ed90ba",
    },
    {
      name: "このみ",
      colorCode: "#f1becb",
    },
    {
      name: "のりこ",
      colorCode: "#eceb70",
    },
    {
      name: "あゆむ",
      colorCode: "#e25a9b",
    },
    {
      name: "みずき",
      colorCode: "#99b7dc",
    },
    {
      name: "ありさ",
      colorCode: "#b54461",
    },
    {
      name: "みや",
      colorCode: "#d7a96b",
    },
    {
      name: "しずか",
      colorCode: "#6495cf",
    },
    {
      name: "あんな",
      colorCode: "#7e6ca8",
    },
    {
      name: "りお",
      colorCode: "#f19591",
    },
    {
      name: "かな",
      colorCode: "#f5ad3b",
    },
    {
      name: "なお",
      colorCode: "#788bc5",
    },
    {
      name: "ろこ",
      colorCode: "#fff03c",
    },
  ]
}


export default App;
