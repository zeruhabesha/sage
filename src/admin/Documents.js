import React from "react";
import "./Documentscss.css";
import { Link } from "react-router-dom";

function Documents() {
  return (
    <div>
      <article class="train">
        <div class="temporary_text">Clerance/Withdrawal form </div>
        <div class="train_content">
          <span class="train_title">Applay for Clearance Here..</span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            <Link to="/clearns" class="scroll-link">
              <i class="fas fa-user"></i> &nbsp;More
            </Link>
          </label>
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">Intership program</div>
        <div class="train_content">
          <span class="train_title">
            View and apply Intership Program Here..
          </span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <a
            href="#"
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            More
          </a>
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">RE-exam application form</div>
        <div class="train_content">
          <span class="train_title">Apply RE-exam Here..</span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            <Link to="/reexam" class="scroll-link">
              <i class="fas fa-user"></i> &nbsp;More
            </Link>
          </label>
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">Feedback form</div>
        <div class="train_content">
          <span class="train_title">
            Send FeedbackSage for Training Institute Here
          </span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          {/* /new */}
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">Instructors Absent report form</div>
        <div class="train_content">
          <span class="train_title">Instructors Absent report are Here..</span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <a
            href="#"
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            More
          </a>
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">Scholarship application form</div>
        <div class="train_content">
          <span class="train_title">Apply Scholarship are Here..</span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <a
            href="#"
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            More
          </a>
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">Request for ID lost form</div>
        <div class="train_content">
          <span class="train_title">Request for ID lost are Here..</span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            <Link to="/request" class="scroll-link">
              <i class="fas fa-user"></i> &nbsp;More
            </Link>
          </label>
        </div>
      </article>
    </div>
  );
}
export default Documents;
