import { useEffect, useState, } from "react";
import { useOutletContext } from "react-router-dom";
import Settings from "../components/Settings";

export default function SettingsPage() {
  const {user} = useOutletContext();


  return (
    <>
      <Settings/>
    </>
  )
};