var h = React.DOM;

function App () {
  return h.div({ className: 'app' },
    h.h1({ className: 'title' },
      React.createElement(AnimatedText, {
        children: 'Hello, World!'
      })
    )
  );
  // <div className="app">
  //   <h1 className="title">
  //     <AnimatedText>Hello, World!</AnimatedText>
  //   </h1>
  // </div>
}

ReactDOM.render(
  App(),
  document.getElementById('root')
);
