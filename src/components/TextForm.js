import React,{useState} from 'react'


function TextForm(props) {
    let newText;
    const handleUpClick=()=>{
        console.log("handle on onclick")
        newText=text.toUpperCase();
        document.querySelector(".preview-text").innerHTML=newText;
        props.showAlert("Text converted to UpperCase","success")
    }
    let handleCopy=()=>{
        var text=document.querySelector("#myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    }
    const handleLowClick=()=>{
        console.log("handle on onclick")
        newText=text.toLowerCase();
        document.querySelector(".preview-text").innerHTML=newText;
        props.showAlert("Text converted to LowerCase","success")
    }
    const handleOnChange=(event)=>{
        console.log("handle on change");
        setText(event.target.value);
    }
    const [text,setText]=useState("");
    return (
        <div style={{color:props.mode==='dark'?'white':'black'}}>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#325885':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        </div>
        <div className='container my-3'>
            <h3>Text Summary</h3>
            <p className='text-sum'>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        <div className='container my-3'>
            <h3>Preview Your Text</h3>
            <p className='preview-text'></p>
        </div>
        </div>
    )
}

export default TextForm;
