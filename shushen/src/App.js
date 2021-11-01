import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Blog from "./containers/Blog";
import Home from "./containers/Home";

const theme = createTheme({
  typography: {},
});
export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
