import Score from './Score'

const Learner = ({ name, bio, scores }) => {
  return (
    <div className="learner">
      <h2>{name}</h2>
      <p>{bio}</p>
      <ul>
        {scores.map((score, index) => (
          <Score key={index} date={score.date} score={score.score} />
        ))}
      </ul>
    </div>
  );
};

export default Learner;