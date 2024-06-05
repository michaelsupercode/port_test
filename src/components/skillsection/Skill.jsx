/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Skill.scss";
const Skill = ({
  skill,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill10,
  skill11,
  skill12,
}) => {
  return (
    <>
      <section className="skillsContainer">
        <h2>..skilled.. </h2>
        <div className="singleSkillWrapper">
          <p>HTML5</p>
          <p>CSS3</p>
          <p>SASS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>MERN</p>
          <p>Tailwind</p>
          <p> Express</p>
          <p>mongoDB</p>
          <p> Git</p>
          <p>Wordpress</p>
          <p>Hosting</p>
        </div>
      </section>
    </>
  );
};

export default Skill;
