import React from "react";
import { useContext } from "react";
import AlertContext from "../../Context/alert/AlertContext";

function Alert() {
  const { alert, setAlert, clearAlert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} max-w-2xl mb-2`} role="alert">
        <svg
          className="fill-current h-6 w-6 text-teal-500 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
        </svg>
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          {alert.msg}
        </p>
        <button className="btn btn-sm close" onClick={clearAlert}>
          <i className="fas fa-times">Close</i>
        </button>
      </div>
    )
  );
}

export default Alert;
