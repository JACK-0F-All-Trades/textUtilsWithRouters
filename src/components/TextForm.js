import React, { useState } from 'react'
import propTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpBtn = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Text Capitalized!","success");
    }

    const handleLowBtn = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Text converted to lower case!","success");
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text cleared!","success");
    }

    const handleReplaceText = () => {
        let replaceText = prompt("Enter the text you want to replace");
        let  textToBeReplaced= prompt("Enter the new text");
        let replaceValue = new RegExp(replaceText, "g");
        let newText = text.replace(replaceValue,textToBeReplaced);
        setText(newText);
        props.showAlert("Text replaced!","success");

    }

    return (
        <>
            <div className='container my-2' style={props.mode}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="textInput" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="textInput" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text here"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpBtn}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLowBtn}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleReplaceText}>Replace Text</button>
            </div>

            <div className='container'>
                <h2>Your Text Summary</h2>
                <p>Your text conatins <b>{text.split(" ")[-1]===" "?text.split(" ").length-1: text.split(" ").length}</b> words & <b>{text.length}</b> characters.</p>
                <small><b>{0.008 * (text.split(" ").length-1)}</b> minutes read time.</small>
                <h2>Preview</h2>
                <p>{text.length===0?"Type in the above text box to see the preview":text}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading : propTypes.string
}

TextForm.defaultProps = {
    heading : "Home"
}

