import React from "react";
import "./ELearn.css";
import web from "./photo/web.jpg";
import app from "./photo/app.jpg";
import grap from "./photo/graphics.png";
import lan from "./photo/lan.jpg";
import jorn from "../img/jpurn.jpg";
import exam from "../img/exam.jpg";
import cisco from "../img/cs.png";
import bu from "../img/business.png";
function Elearn() {
  return (
    <div>
      <h3 className="Enheads">Sage Online ducation</h3>
      <p className="EnPara">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem IpsumLorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <div class="Encard">
        <div class="Encard-image">
          <img className="enpic" src={web} />
        </div>
        <div class="Encategory"> Website Course </div>
        <div class="Enheading">
          <a href="weblearn" className="enln">
            To Take a course click on here!
          </a>
          <div class="Enauthor">
            By <span class="Enname">Neba And Zedo </span> 2023
          </div>
        </div>
      </div>
      <div class="Encard">
        <div class="Encard-image">
          <img className="enpic" src={app} />
        </div>
        <div class="Encategory"> Application Course </div>
        <div class="Enheading">
          <a href="applearn" className="enln">
            To Take a course click on here!
          </a>
          <div class="Enauthor">
            By <span class="Enname">Neba And Zedo </span> 2023
          </div>
        </div>
      </div>
      <div class="Encard">
        <div class="Encard-image">
          <img className="enpic" src={bu} />
        </div>
        <div class="Encategory"> Business & finance Course </div>
        <div class="Enheading">
          <a href="bunilearn" className="enln">
            To Take a course click on here!
          </a>
          <div class="Enauthor">
            By <span class="Enname">Neba And Zedo </span> 2023
          </div>
        </div>
      </div>
      <div class="Encard">
        <div class="Encard-image">
          <img className="enpic" src={jorn} />
        </div>
        <div class="Encategory"> Journalism Course </div>
        <div class="Enheading">
          <a href="jornlearn" className="enln">
            To Take a course click on here!
          </a>
          <div class="Enauthor">
            By <span class="Enname">Neba And Zedo </span> 2023
          </div>
        </div>
      </div>
      <div class="Encard">
        <div class="Encard-image">
          <img className="enpic" src={grap} />
        </div>
        <div class="Encategory"> Graphics Course </div>
        <div class="Enheading">
          <a href="graplearn" className="enln">
            To Take a course click on here!
          </a>
          <div class="Enauthor">
            By <span class="Enname">Neba And Zedo </span> 2023
          </div>
        </div>
      </div>
      <div class="Encard">
        <div class="Encard-image">
          <img className="enpic" src={exam} />
        </div>
        <div class="Encategory"> Exam Preparation </div>
        <div class="Enheading">
          <a href="examlearn" className="enln">
            To Take a course click on here!
          </a>
          <div class="Enauthor">
            By <span class="Enname">Neba And Zedo </span> 2023
          </div>
        </div>
      </div>
      <div class="Encard">
        <div class="Encard-image">
          <img className="enpic" src={lan} />
        </div>
        <div class="Encategory"> Language Course </div>
        <div class="Enheading">
          <a href="lanlearn" className="enln">
            To Take a course click on here!
          </a>
          <div class="Enauthor">
            By <span class="Enname">Neba And Zedo </span> 2023
          </div>
        </div>
      </div>
      <div class="Encard">
        <div class="Encard-image">
          <img className="enpic" src={cisco} />
        </div>
        <div class="Encategory"> Cisco Course </div>
        <div class="Enheading">
          <a href="ciscolearn" className="enln">
            To Take a course click on here!
          </a>
          <div class="Enauthor">
            By <span class="Enname">Neba And Zedo </span> 2023
          </div>
        </div>
      </div>
      <section className="EnSec">
        <h1 class="Entext-shadow"> Thank You For Choosing Us! </h1>
        <div class="Entags">
          <p class="Entext-shadow">
            <small>Sage Training Institute</small>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Elearn;
