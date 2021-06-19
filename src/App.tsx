import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import ColorBox from './components/ColorBox'
import {changePenlightColor, PostObject} from './util/APIUtils'

const customStyles = {
  content : {
      width                 : '60%',
      height: '160px',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
}

interface ModalState {
  colorCode: string;
  idolName: string;
  isOpen: boolean;
}

type FlushType = "normal" | "wave";

Modal.setAppElement('#root')

const App: React.FC<any> = props => {
  const [idolListStatus] = useState<Idols>(initData)
  const [flushTypeStatus, setFlushTypeStatus] = useState<FlushType>("normal")

  const [modalState,setIsOpen] = useState<ModalState>({colorCode: "", idolName: "", isOpen: false});
  const [errorState, setErrorState] = useState<string>("");

  function openModal(colorCode: string, idolName: string) {
    setIsOpen({
      colorCode: colorCode,
      idolName: idolName,
      isOpen: true
    });
  }

  function closeModal() {
      setIsOpen({
        colorCode: "",
        idolName: "",
        isOpen: false
      });
      setErrorState("");
  }

  const flushTypeToNumber = (): number => {
    switch(flushTypeStatus){
      case "normal":
        return 1
      case "wave":
        return 2
    }
  }


  const callApi = () => {
      const po: PostObject = {color_code: modalState.colorCode, flush_type: flushTypeToNumber()}
      changePenlightColor(po)
      .then(response => {
          closeModal()
        })
        .catch(error => {
          if (error.name !== "AbortError") console.log(`error: ${error}`);
          setErrorState("通信に失敗しました")
        });
  }

  const handleChange = (e: any) => {
    setFlushTypeStatus(e.target.value)
  };

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
                setIsOpen={openModal}
              />
              )
            })}
          </ul>
        </div>
        <Modal
          isOpen={modalState.isOpen}
          onRequestClose={closeModal}
          contentLabel=""
          style={customStyles}
          >
          <div className="modal-check-content">
              ペンライトの色を<span style={{color: modalState.colorCode}}>{modalState.idolName}</span>に変更します
          </div>
          <div className="flush-type-box">
            光り方
            <div className="flush-type-box-input">
            <label>
              <input
                type="radio"
                value="normal"
                onChange={handleChange}
                checked={flushTypeStatus === "normal"}
              />
            normal
            </label>
            <label>
              <input
                type="radio"
                value="wave"
                onChange={handleChange}
                checked={flushTypeStatus === "wave"}
              />
              wave
            </label>
            </div>
          </div>
          {errorState && <span>{errorState}</span>}
          <div className="btn-box">
              <button className="btn cancel" onClick={closeModal}>キャンセル</button>
              <button className="btn ok" onClick={callApi}>決定</button>
          </div>
        </Modal>
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
