import React, {useEffect} from 'react';
import {tee2,tee3,tee4,tee5,tee6,tee7,tee8,tee9} from '../Data/tees';

//Buttons Componenet will be used to render the "Next Tee" & "Next Green" Buttons
const Buttons = (props) => {

  //incTee is called onClick if the Button is a "Next Tee"
  function incTee() {

    if(props.validNextTee && !props.isGo) //Ensure that incramenting the tee is valid
    {
      //Set proper state variables
      props.setValidNextTee(false); 
      props.setValidGreenTee(true);
      props.setValidTarget(true);
      console.log(props.targetTee);


      //Set corresponding state positions depending on the tee that is being targeted
      if(props.targetTee===2) {
        if(props.tee === "black") props.setNextPosition(tee2.blackPos);
        if(props.tee === "bronze") props.setNextPosition(tee2.bronzePos);
        if(props.tee === "silver") props.setNextPosition(tee2.silverPos);
        if(props.tee === "gold") props.setNextPosition(tee2.goldPos);
      }
      if(props.targetTee===3) {
        if(props.tee === "black") props.setNextPosition(tee3.blackPos);
        if(props.tee === "bronze") props.setNextPosition(tee3.bronzePos);
        if(props.tee === "silver") props.setNextPosition(tee3.silverPos);
        if(props.tee === "gold") props.setNextPosition(tee3.goldPos);
      }
      if(props.targetTee===4) {
        if(props.tee === "black") props.setNextPosition(tee4.blackPos);
        if(props.tee === "bronze") props.setNextPosition(tee4.bronzePos);
        if(props.tee === "silver") props.setNextPosition(tee4.silverPos);
        if(props.tee === "gold") props.setNextPosition(tee4.goldPos);
      }
      if(props.targetTee===5) {
        if(props.tee === "black") props.setNextPosition(tee5.blackPos);
        if(props.tee === "bronze") props.setNextPosition(tee5.bronzePos);
        if(props.tee === "silver") props.setNextPosition(tee5.silverPos);
        if(props.tee === "gold") props.setNextPosition(tee5.goldPos);
      }
      if(props.targetTee===6) {
        if(props.tee === "black") props.setNextPosition(tee6.blackPos);
        if(props.tee === "bronze") props.setNextPosition(tee6.bronzePos);
        if(props.tee === "silver") props.setNextPosition(tee6.silverPos);
        if(props.tee === "gold") props.setNextPosition(tee6.goldPos);
      }
      if(props.targetTee===7) {
        if(props.tee === "black") props.setNextPosition(tee7.blackPos);
        if(props.tee === "bronze") props.setNextPosition(tee7.bronzePos);
        if(props.tee === "silver") props.setNextPosition(tee7.silverPos);
        if(props.tee === "gold") props.setNextPosition(tee7.goldPos);
      }
      if(props.targetTee===8) {
        if(props.tee === "black") props.setNextPosition(tee8.blackPos);
        if(props.tee === "bronze") props.setNextPosition(tee8.bronzePos);
        if(props.tee === "silver") props.setNextPosition(tee8.silverPos);
        if(props.tee === "gold") props.setNextPosition(tee8.goldPos);
      }
      if(props.targetTee===9) {
        if(props.tee === "black") props.setNextPosition(tee9.blackPos);
        if(props.tee === "bronze") props.setNextPosition(tee9.bronzePos);
        if(props.tee === "silver") props.setNextPosition(tee9.silverPos);
        if(props.tee === "gold") props.setNextPosition(tee9.goldPos);
      }
      props.teeOrGreen = 0; //Set 0 to signal that the current target is a Tee
    }
  }

  //incTee is called onClick if the Button is a "Next Tee"
  function incGreen() {
    if(props.validGreenTee && !props.isGo) //Ensure that incramenting the green is valid
    {
      //Set proper state variables
      props.setValidGreenTee(false);
      props.setValidNextTee(true);
      props.setValidTarget(true)
      console.log(props.targetGreen)

      //Set corresponding state positions depending on the green location that is being targeted
      if(props.targetGreen===1) props.setNextPosition(props.tee1.greenPos);
      if(props.targetGreen===2) props.setNextPosition(props.tee2.greenPos);
      if(props.targetGreen===3) props.setNextPosition(props.tee3.greenPos);
      if(props.targetGreen===4) props.setNextPosition(props.tee4.greenPos);
      if(props.targetGreen===5) props.setNextPosition(props.tee5.greenPos);
      if(props.targetGreen===6) props.setNextPosition(props.tee6.greenPos);
      if(props.targetGreen===7) props.setNextPosition(props.tee7.greenPos);
      if(props.targetGreen===8) props.setNextPosition(props.tee8.greenPos);
      if(props.targetGreen===8) props.setNextPosition(props.tee9.greenPos);
    }
    props.teeOrGreen = 1; //Set 1 to signal that the current target is a green
  }

  let isTee = false;
  if(props.name === "Next Teebox") isTee = true;

  return (
      //Render the proper button according to the isTee variable that was set through the name state. 
      <input style={{cursor: "pointer"}} onClick={isTee ? incTee : incGreen} type="submit" className='bg-[#3E3B3B] text-white py-4 w-[275px] rounded-xl shadow-lg text-3xl' value={props.name}></input>
  )
}

export default Buttons