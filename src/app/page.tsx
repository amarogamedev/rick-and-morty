"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { initializeApp } from "firebase/app";
import Main from "./main";

const App = () => {
  const queryClient = new QueryClient();

  const firebaseConfig = {
    apiKey: "AIzaSyD89i2fXF-f5fp0MU89jSCfPHD4cqVE7hk",
    authDomain: "rick-and-morty-b6c19.firebaseapp.com",
    projectId: "rick-and-morty-b6c19",
    storageBucket: "rick-and-morty-b6c19.firebasestorage.app",
    messagingSenderId: "286430102206",
    appId: "1:286430102206:web:fa5815ecd81d9847f314ef",
    measurementId: "G-CXRENFBEPE"
  };

  initializeApp(firebaseConfig);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Main />
    </QueryClientProvider>
  );
};

export default App;