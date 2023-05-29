export const activeLinkSideBar = ({ isActive }) => {
  return {
    color: isActive ? "#33404e" : "#5ba2e1",
    background: isActive ? "#e3cff3" : "white",
  };
};

export const activeLink = ({ isActive }) => {
  return {
    color: isActive ? "#293b4b" : "white",
    borderBottom: isActive && "5px solid #f1c12a",
  };
};
