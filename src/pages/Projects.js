import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Mouse from "../components/Mouse";

export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <ButtonsBottom left={"/"} right={"/project-2"} />
      </div>
    </main>
  );
};
export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonsBottom left={"/project-1"} right={"/project-3"} />
      </div>
    </main>
  );
};
export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonsBottom left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};
export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonsBottom left={"/project-3"} right={"/project-5"} />
      </div>
    </main>
  );
};
export const Project5 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={4} />
        <ButtonsBottom left={"/project-4"} right={"/project-6"} />
      </div>
    </main>
  );
};
export const Project6 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={5} />
        <ButtonsBottom left={"/project-5"} right={"/project-7"} />
      </div>
    </main>
  );
};
export const Project7 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={6} />
        <ButtonsBottom left={"/project-6"} right={"/contact"} />
      </div>
    </main>
  );
};
