import React from "react";

const items = [
  {
    id: 1,
    title: "Sobre Mí",
  },
  {
    id: 2,
    title: "Contacto",
    mailto: "mailto:faillamaximiliano@gmail.com",
  },
];

const Header = () => {
  const scrollToItem = (event, mailto) => {
    if (mailto) {
      window.location.href = mailto;
    } else {
      const targetId = event.target.innerText.toLowerCase().replace(" ", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <nav className="nav_container">
          <div className="nav_1">
            <a className="logo_text" onClick={scrollToTop}>
              {"{MF}"}
            </a>
          </div>
          <div className="nav_2">
            {items.map((item) => {
              return (
                <button
                  className="btn-nav"
                  onClick={(event) => scrollToItem(event, item.mailto)}
                  key={item.id}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
