import { ReactNode } from "react";
import ClientProvider from "./ClientProvider";

const AppProvider = ({ children }: { children: ReactNode }) => {
  console.log(console.timeStamp(), `NODE_ENV: ${process.env.NODE_ENV}`);
  return <ClientProvider>{children}</ClientProvider>;
};

export default AppProvider;
