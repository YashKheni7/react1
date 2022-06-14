// import { clear } from "@testing-library/user-event/dist/clear";
import React , {useState} from "react";
export default function TextForm(props) {
    const Upclick=()=>
    {
        // console.log('Clicked Upclick'+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to upercase","success")
    }
    const Loclick=()=>
    {
        // console.log('Clicked Loclick'+text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success")

    }
    const clear=()=>
    {
        
        let newtext='';
        setText(newtext);
        props.showAlert("Cleared","success")

    }
    const space =() =>{
      let newtext= text.replace(/\s/g,'').trim();
      setText(newtext);
      props.showAlert("","success")

    }
    const handlecopy = () =>{
      var text=document.getElementById('MyBox');
      text.select();
      navigator.clipboard.writeText(text.value);
        }
    const Upchange=(event)=>
    {
        // console.log('Clicked Upchnage'); 
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter your Text Here');
    
    return (
        <>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control  "onChange={Upchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-4 mx-2" onClick={Upclick} >Convert to UpperCase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={Loclick} >Convert to LowerCase</button>     
        <button className="btn btn-primary my-4 mx-2" onClick={clear} >Clear Text</button>
        <button type="submit" className="btn btn-primary my-4 mx-2" onClick={space} >Space</button>
        <button className="btn btn-primary my-4 mx-2" onClick={handlecopy} >Copy Text</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>your text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        
         <p>{0.008 *text.split(" ").length}minutes read</p>

         <h1>Preview</h1>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
       
      </div>
   
      </>
  );
}
