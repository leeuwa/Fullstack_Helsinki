const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = (props) => {
    return (
      <div>
        <p>Course: {props.course}</p>
      </div>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <p>
          {props.part} (number of exercises: {props.exercises})
        </p>
      </div>
    );
  };

  const Total = (props) => {
    return (
      <div>
        <p>
          Total number of exercises: <b>{props.total}</b>
        </p>
      </div>
    );
  };

  return (
    <div>
      <h2>
        <Header course={course} />
      </h2>
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <br />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
