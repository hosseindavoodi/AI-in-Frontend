import { useState } from "react";
import { useMount } from "./Hooks/useMount";

const menuItems = [
  { id: 1, name: "Find job", click: "" },
  { id: 2, name: "Application proccess", click: "" },
  { id: 3, name: "CV designer", click: "" },
  { id: 4, name: "Blogs", click: "" },
  { id: 5, name: "Contact us", click: "" },
];

const Header = () => {
  const [quickMenu, setQuickMenu] = useState("");

  const handleMenuClick = (menuId: number, menuName: string) => {
    const clicksMap = JSON.parse(localStorage.getItem("menuClicks") || "{}");
    clicksMap[menuId] = (clicksMap[menuId] || 0) + 1;
    localStorage.setItem("menuClicks", JSON.stringify(clicksMap));
    window.open(`/${menuName}`, "_blank");
    console.log(clicksMap);
  };

  useMount(() => {
    const storedMenuClicks = localStorage.getItem("menuClicks");
    if (storedMenuClicks) {
      const categoryClicksMap = JSON.parse(storedMenuClicks);

      const sortedMenu = [...menuItems].sort(
        (a, b) =>
          (categoryClicksMap[b.id] || 0) - (categoryClicksMap[a.id] || 0) ||
          a.id - b.id
      );
      console.log(sortedMenu);
      setQuickMenu(sortedMenu[0].name);
    }
  });

  return (
    <div className="header">
      Menu
      <div className="menuContainer">
        <div style={{ display: "flex" }}>
          <ul className="menu">
            {menuItems.map((menu) => (
              <li
                key={menu.id}
                onClick={() => handleMenuClick(menu.id, menu.name)}
              >
                {menu.name}
              </li>
            ))}
          </ul>
          <div className="quickMenu">
            <p className="quickMenuTitle">Quick Menu</p>
            <ul className="quickMenuItems">
              <li> Contact us</li>
              <li> {quickMenu}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
