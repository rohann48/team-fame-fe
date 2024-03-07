export type configurationType = {
  sideNavLinks: Array<{
    title: string;
    img: any;
    path: string;
  }>;
  configurationRoutes: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null;
};
