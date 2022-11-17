import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreens } from "./src/features/restaurants/screens/restaurants-screens";

export default function App() {
  return (
    <>
      <RestaurantsScreens />
      <ExpoStatusBar style="auto" />
    </>
  );
}
