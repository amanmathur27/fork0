import Spline from "@splinetool/react-spline";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";

export default function App() {
  return (
    <div className="h-screen relative z-0">
      <div className="absolute z-10 bottom-5 right-5 flex items-center gap-4">
        <h3 className="text-3xl font-semibold border-b-2">Contact Us:</h3>
        <a
          href="mailto:fork0xyz@gmail.com"
          className="cursor-pointer animate-bounce"
        >
          <EmailIcon style={{ fontSize: "4rem"}} />
        </a>
      </div>
      <Spline scene="https://prod.spline.design/iI3vabf1CN-SypqM/scene.splinecode" />
    </div>
  );
}
