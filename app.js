const appRoot = document.querySelector('#application-root');

ReactDOM.render(<App />, appRoot);


function App() {
    return  (
        <div>
          <h1>Hello, everyone!</h1>
          <p>We think</p>
          <ul>
            <li>React</li>
            <li>is</li>
            <li>brilliant!</li>
          </ul>
        </div>
      );
}
