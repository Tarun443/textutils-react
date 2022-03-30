import React, { useState } from "react";
function Textbox(props) {
  const [text, setText] = useState("");

  const handleUp = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Coverted to uppercase",'success');
  };

  const handleKeepAlp = () => {
    let reg = /[a-z]+/gi;
    let newstr = text.match(reg);
    newstr = newstr.join(" ");
    setText(newstr);
    props.showAlert('Removed numbers and symbols', 'success');

  };

  const handleLo = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    console.log(text.split(" "));
    props.showAlert('Coverted to lowercase', 'success');

  };

  // making first letter of every word capital
  const handleCap = () => {
    let arr = text.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
      let a = arr[i];
      a = a.charAt(0).toUpperCase() + a.slice(1);
      console.log(a);
    props.showAlert('Capitalized every first letter', 'success');
	arr[i] = a;

    }
    arr = arr.join(" ");
    console.log()
    setText(arr);
  };

  const handleRev = () => {
    let arr = text.split("");
    arr = arr.reverse();
    arr = arr.join("");
    setText(arr);
    props.showAlert('Reversed the sentence', 'success');

  };

  const handleClear = ()=>{
    setText('');
    props.showAlert('Textfield cleared', 'success');

  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className={`container my-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div>
          <label htmlFor="textbox1" className="form-label">
            <h1>Enter text below:</h1>
          </label>
          <textarea
            className="form-control"
            id="textbox1"
            rows="8"
            placeholder="Enter the text here"
            value={text}
            onChange={handleOnChange}
            color={props.mode === "light" ? "dark" : "light"}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary my-4 mx-1"
          onClick={handleUp}
        >
          Convert to uppercase
        </button>
  
        <button
          type="button"
          className="btn btn-primary my-4 mx-1"
          onClick={handleLo}
        >
          Convert to lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-4 mx-1"
          onClick={handleCap}
        >
          Capitalize
        </button>
        <button
          type="button"
          className="btn btn-primary my-4 mx-1"
          onClick={handleRev}
        >
          Reverse Sentence
        </button>
        <button
          type="button"
          className="btn btn-primary my-4 mx-1"
          onClick={handleKeepAlp}
        >
          Remove numbers and symbols
        </button>
        <button
          type="button"
          className="btn btn-primary my-4 mx-1"
          onClick={handleClear}
        >
          Clear field
        </button>
        <div className="container">
          <h2>Your text summary:</h2>
          <p>
            Your text has {text === "" ? 0 : text.split(" ").length} words and{" "}
            {text.length} characters.
          </p>
          <p>You can read this text in {0.005 * (text.length / 6)} minutes.</p>
          <h2>
            {text === ""
              ? `Enter text to see preview of your text`
              : `Preview of your text`}
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Textbox;
