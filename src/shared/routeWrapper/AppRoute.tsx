import React, { ComponentType } from "react";
import { Route, RouteProps, RouteComponentProps } from "react-router-dom";

interface AppRouterParams extends RouteProps {
  component: ComponentType;
  layout: ComponentType;
}

export const AppRoute: React.FC<AppRouterParams> = ({
  component: Component,
  layout: Layout,
}: AppRouterParams) => {
  return (
    <Route>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};