import "./globals.css";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import react from "react";
import Layout from "@/components/Layout/Layout";

export const metadata={
  title:"Agora"
}
const layout = ({children }) => {
  return (
    <html>
      <body className=" bg-white">
        <Layout children={children} />
      </body>
    </html>
  );
};

export default layout;
