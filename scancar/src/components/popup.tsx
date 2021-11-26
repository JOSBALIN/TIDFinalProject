import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';


const PopupExample = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    {" "}
    <div>PopASDASDSADAup content here !!</div>{" "}
  </Popup>
);
