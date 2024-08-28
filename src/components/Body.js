import React,{useState} from 'react'

export default function Body(props) {

    const handlerUpperClick = ()=> {
        // console.log("Handler for upper case clicked!!!")
        let x = text.toUpperCase()
        setText(x)
    }

    const handlerLowerClick = ()=> {
        // console.log("Handler for lower case clicked!!!")
        let y = text.toLowerCase()
        setText(y)
    }

    const handlerLength = () => {
        // console.log("Handler for finding length clicked!!!")
        let z = text.length
        setText("Length of string: " + z)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    //this function is for speak functionality
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }


    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#042743'}}>        
        <div className="mb-3 text-center">
        <h1>{props.heading}</h1>
        <button type="submit" onClick={speak} className="btn btn-danger mx-2 my-2">Speak</button>

        <textarea className="form-control " id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div> 
         
            <button className="btn btn-primary" onClick={handlerUpperClick}>Convert to Uppercase</button>      

         
            <button className="btn btn-warning my-4 mx-1" onClick={handlerLowerClick}>Convert to Lowercase</button>
         
         
            <button className="btn btn-success my-2 mx-1" onClick={handlerLength}> Find Length</button>
         
            <button className="btn btn-info my-2 mx-1" onClick={handleCopy}> Copy text</button>
         
    </div>

    <hr style={{color: props.mode==='dark'?'white':'#042743'}}/>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>

        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} <b>Words and </b> {text.length} <b>Characters.</b></p>
    </div>

    <hr style={{color: props.mode==='dark'?'white':'#042743'}}/>


    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>

        <h2 >Text Preview</h2>
        <p style={{fontFamily: 'inherit'}}>{text.length > 0 ? text : "Enter some text in above textbox to get preview "}</p>
    </div>
        
    </>
  )
}
