import React from "react";
import "./Examcss.css";
function ExamE() {
  return (
    <div>
      <h1 className="webhead">
        <b>Exam Preparation Course Lists</b>
      </h1>
      <div className="ClassMain">
        <div className="WebClass">
          <iframe
            Web
            width="420"
            height="345"
            src=" https://www.youtube.com//embed/7XA49rWNiqw?playlist=7XA49rWNiqw&loop=1"
          ></iframe>
          <iframe
            width="420"
            height="345"
            src="https://www.youtube.com//embed/cdkiz8gEt4E?playlist=cdkiz8gEt4E&loop=1"
          ></iframe>
          <iframe
            width="420"
            height="345"
            src="https://www.youtube.com//embed/FV3aawQaYSo?playlist=FV3aawQaYSo&loop=1"
          ></iframe>
        </div>
        <div className="GraphicClass">
          <iframe
            width="420"
            height="345"
            src="https://www.youtube.com/embed/zwh2cbfD5y4?playlist=zwh2cbfD5y4&loop=1"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ExamE;
