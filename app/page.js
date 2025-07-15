'use client';
import React, { useEffect, useState } from "react";

import Header from "./header/page";
import Myskills from "./mySkills/page";
import Aboutme from "./aboutMe/pages";
import Workprocess from "./workProcess/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex flex-col max-w-[1440px] w-full mx-auto">
      <section><Header isDark={isDark} toggleTheme={toggleTheme}/></section>
      <section><Myskills /></section>
      <section><Aboutme /></section>
      <section><Workprocess /></section>
      <section><Contact /></section>
      <section><Footer /></section>
    </div>
  );
}
