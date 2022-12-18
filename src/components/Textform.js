import React,{useState} from 'react'



export default function Textform(props ) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick=()=>{
        // console.log("handleLowClick was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }

    
    const handleClearText=()=>{
        // console.log("handleLowClick was clicked");
        let newText=("");
        setText(newText);
    }
    
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.Select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
       
    }

    

  const [text,setText]=useState('Enter text here ');

  return (
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="3"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>

        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy text</button>
        
        <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

        
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes required needed to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter yout text to preview it"}</p>
    </div>
    
      </>
  )
}

//what are hooks
// const [text,setText]=useState('Enter text here');
//          |                           |
//(set sate variable) will have default value this : 'Enter text here'
//   setText("abc")  -- correct way to set text