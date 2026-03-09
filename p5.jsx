import { HashRouter, Route, Link } from "react-router-dom";
import './styles/main.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Example from './components/example/Example';
import States from './components/states/States';

ReactDOM.render(
    <Header/>,
    document.getElementById('reactappHeader')
);

ReactDOM.render(
  <HashRouter>
    <title>Class Project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="modelData/example.js"></script>
    <script src="modelData/states.js"></script>
  </HashRouter>,
    document.getElementById('reactapp')
);

<body>
    <div id="reactappHeader"></div>
    <div id="reactapp"></div>
    <script src="compiled/p5.bundle.js"></script>
</body>

</html>
