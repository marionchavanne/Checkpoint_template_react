import React from "react";
import "../../Styles/imports.scss";

function Page() {
  return (
    <>
      <br />
      <img alt="" className="header" src="src/assets/uploads/header.png" />
      <br />
      <div className="discover">
        <h2>Découvrez le parachutisme</h2>

        <h3>
          Vous êtes posé(e) au bon endroit ! <br />
          Une envie de découverte, de nouvelles sensations ?
        </h3>
        <p>
          Un défi, un besoin de sortir des sentiers battus ou tout simplement un
          plein d’adrénaline bonifiant ? Le parachutisme est fait pour vous !
          Dans toutes ces composantes, vous trouverez pour vos proches ou
          vous-même une activité sportive qui pourrait même vous faire prendre
          goût à la compétition.
        </p>
      </div>
    </>
  );
}

export default Page;
