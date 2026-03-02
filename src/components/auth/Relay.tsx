import { useEffect } from "react";

const Relay = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const role = params.get("role");
    const error = params.get("error");

    if (error) {
      window.opener?.postMessage({ error: "Google login failed" }, window.location.origin);
    } else if (token && role) {
      window.opener?.postMessage({ token, role }, window.location.origin);
    }

    window.close();
  }, []);

  return null; // user never sees this
};

export default Relay;