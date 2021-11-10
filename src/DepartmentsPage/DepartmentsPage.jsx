import React from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useParams,
  useLocation,
} from "react-router-dom";
import { MainContainer } from "../components/Main/Main.styles";

export default function DepartmentsPage() {
  const { url, path } = useRouteMatch();
  // const history = useHistory();
  // const params = useParams();
  // const location = useLocation();

  // console.log("match", match);
  // console.log("history :>> ", history);
  // console.log("params :>> ", params);
  // console.log("location :>> ", location);

  return (
    <MainContainer>
      <ul>
        <li>Факультет информатики и выычислительной техники</li>
        <li>Факультет искуственого интелекта</li>
        <li>Факультет аналитики</li>
      </ul>

      {/* url используем для NavLink , path исользуем для Route */}
      <nav>
        <Link to={`${url}/about`}>About</Link>
        <Link to={`${url}/home`}>Home</Link>
        <Link to={`${url}/info`}>Info</Link>
      </nav>

      <Switch>
        <Route path={`${path}/about`}>
          <h1>ABOUT</h1>
        </Route>
        <Route path={`${path}/home`}>
          <h1>HOME</h1>
        </Route>
        <Route path={`${path}/info`}>
          <h1>INFO</h1>
        </Route>
      </Switch>
    </MainContainer>
  );
}
