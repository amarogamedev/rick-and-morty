import { useEffect, useState } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

const RouterWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterWrapper;
