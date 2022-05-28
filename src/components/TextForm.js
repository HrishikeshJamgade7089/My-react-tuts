import React from 'react';
import {useState} from 'react';

export default function TextForm(props) {
  
  const HandleOnChange = (event)=>{
    console.log('This is the HandleOnChange.'+text);
    setText(event.target.value);
  }

  const HandleOnClick = ()=>{
    console.log("Primary Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text converted to upper case.','success');
  }
  const HandleOfClick = ()=>{
    console.log("Primary Button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text converted to lower case.','success');
  }

  const HandleSort = ()=>{
    console.log('HandleSort was clicked.');
    let Textnew = document.getElementById('exampleFormControlTextarea1').style.color = 'red';
    setText(Textnew);  
  }

  const copyText = ()=>{
      let text = document.querySelector('#exampleFormControlTextarea1').value;
      navigator.clipboard.writeText(text);
      props.showAlert('Copied clipboard','success');
  }

  const removespace = (str)=>{
    console.log(str);
    let strshort = str.replace(/\s+/g,' ').trim();
    let name = strshort.split(' ');
    console.log(name);
    let cou = name.length;
    if(name===['']){
      return 0;
    }
    else{return cou};
  }

  const [text,setText] = useState('Enter the text');

  return (
    <>
      <div className={`text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" onChange={HandleOnChange} rows="9"></textarea>
        </div>
        <button type="button" className={`btn btn-primary mx-2 text-${props.mode==='light'?'dark':'light'}`} onClick={HandleOnClick}>Convert UpperCase</button>
        <button type="button" className={`btn btn-primary mx-2 text-${props.mode==='light'?'dark':'light'}`} onClick={HandleOfClick}>Convert LowerCase</button>
        <button type="button" className={`btn btn-primary mx-2 text-${props.mode==='light'?'dark':'light'}`} onClick={HandleSort}>turn any text into red</button>
        <button type="button" className={`btn btn-primary mx-2 text-${props.mode==='light'?'dark':'light'}`} onClick={copyText}>Copy Text</button>
      </div>

      <h3 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>Text Content</h3>
      <div className={`text-${props.mode==='light'?'dark':'light'}`}><b>{removespace(text)}</b> words and <b>{text.length}</b> chars</div>
      <div className={`text-${props.mode==='light'?'dark':'light'}`} >In <b>{0.08 * text.split(' ').length}</b> min, you can read this.</div>
      <div className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h4 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h4>
        <p>{text.length>0?text:'Enter something in the text area to Preview'}</p>
      </div>
      
    </>
  )
}
