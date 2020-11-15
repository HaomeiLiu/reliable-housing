import React from "react";
import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  return (
    <div>
      <h4>Page not found.</h4>
      <p>
        The requested URL <code>{location.pathname}</code> was not found.
      </p>
    </div>
  );
}
