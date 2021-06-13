import { Redirect, Route, RouteProps } from "react-router-dom";
import { useTsSelector } from "../hooks/useTsSelector";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute = ({ ...routeProps }: PrivateRouteProps) => {
  const { user } = useTsSelector((state) => state.session);

  if (user) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={"/signin"} />;
  }
};

export default PrivateRoute;
