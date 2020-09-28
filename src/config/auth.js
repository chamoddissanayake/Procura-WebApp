var isLogged = () => {
  let username = localStorage.getItem("username");
  let type = localStorage.getItem("type") ? localStorage.getItem("type") : [];

  if (username) {
    return true;
  } else {
    return false;
  }
};

export { isLogged };
