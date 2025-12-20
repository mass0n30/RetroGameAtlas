/* eslint-disable react-refresh/only-export-components */

import { Spinner } from "react-spinner-toolkit";


export default function CustomSpinner() {

  return (
    <Spinner shape="wave" color="#00aaff" loading speed={1.3} size={100} transition={true} />
  )
};

export function CustomSpinnerBottom() {

  return (
      <div id="custom-spinner-container">
        <Spinner shape="wave" color="#00aaff" loading speed={1.3} size={100} transition={true} />
      </div>
  )
}

export function CustomSpinnerDots() {

  return (
      <div id="custom-spinner-dots">
        <Spinner shape="fading" color="#00aaff" loading speed={1.3} size={50} transition={true} />
      </div>
  )
}


