const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  const Header = (props) => {
    return (
      <div>
        <p>Course: {props.course}</p>
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

  const Content = () => {
    return (
      <>
        {parts.map((part, index) => {
          return (
            <p>
              {part.name} (number of exercises: {part.exercises})
            </p>
          );
        })}
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

  const Total = () => {
    let total = 0;
    return (
      <>
        {parts.map((part) => {
          {
            total = total + part.exercises;
          }
        })}
        <p>Total number of exercises: {total}</p>
      </>
    );
  };

  return (
    <div>
      <h2>
        <Header course={course} />
      </h2>
      <Content />
      <br />
      <Total />
    </div>
  );
};

export default App;
