import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Blog from "./containers/Blog";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Home from "./containers/Home";

const theme = createTheme({
  typography: {},
});
export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}
