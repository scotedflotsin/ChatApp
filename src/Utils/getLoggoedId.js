import { jwtDecode } from "jwt-decode";

function getIdFormToken() {
  try {
    const cookies = document.cookie;
    const tokenRefine = cookies.slice(5);
    const data = jwtDecode(tokenRefine);
    return data.data.userId;
  } catch (err) {
    alert("While ID extraction..");
  }
}

export { getIdFormToken };
