const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return (
      <div>
        <p>Course: {props.course.name}</p>
      </div>
    );
  };

  //const Part = (props) => {
  //  return (
  //    <p>
  //      {props.part} (number of exercises: {props.exercises})
  //    </p>
  //  );
  //};

  const Content = (props) => {
    return (
      <>
        <p>
          {props.parts[0].name} (number of exercises:
          {props.parts[0].exercises})
        </p>
        <p>
          {props.parts[1].name} (number of exercises:
          {props.parts[1].exercises})
        </p>
        <p>
          {props.parts[2].name} (number of exercises:
          {props.parts[2].exercises})
        </p>
      </>
    );
  };

  // const Total = () => {
  //   return (
  //     <div>
  //       <p>
  //         Total number of exercises: <b>{props.total}</b>
  //       </p>
  //     </div>
  //   );
  // };

  const Total = (props) => {
    return (
      <p>
        Total number of exercises:{" "}
        <b>
          {props.parts[0].exercises +
            props.parts[1].exercises +
            props.parts[2].exercises}
        </b>
      </p>
    );
  };

  return (
    <div>
      <h2>
        <Header course={course} />
      </h2>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
