
import { useEffect, useRef, useState } from "react";
import "./FeaturedMenu.scss";

import { menuData } from "../../../data/menuData";

const tabs = ["Coffee", "Drinks", "Food", "Desserts"];

const MENU_PATH = "/menu.pdf";
const REVEAL_DURATION = 1800;

const FeaturedMenu = () => {
  const [activeTab, setActiveTab] = useState("Coffee");
  const [isOpening, setIsOpening] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleOpenMenu = () => {
    if (isOpening) return;

    const pdfUrl = new URL(
      MENU_PATH,
      window.location.origin
    ).href;

    // Open the tab immediately to avoid popup blocking.
    const newTab = window.open("", "_blank");

    setIsOpening(true);

    // Fallback if popup was blocked.
    if (!newTab) {
      timeoutRef.current = window.setTimeout(() => {
        window.location.assign(pdfUrl);
      }, REVEAL_DURATION);

      return;
    }

    try {
      newTab.opener = null;
      newTab.document.title = "Opening Our Menu";
      newTab.document.documentElement.lang = "en";
      newTab.document.body.className = "menu-reveal-page";

      // Copy existing application styles.
      document.head
        .querySelectorAll('link[rel="stylesheet"], style')
        .forEach((stylesheet) => {
          newTab.document.head.appendChild(
            stylesheet.cloneNode(true)
          );
        });

      // Premium reveal screen.
      newTab.document.body.innerHTML = `
        <main
          class="menu-reveal"
          role="status"
          aria-live="polite"
        >
          <div
            class="menu-reveal__ornament"
            aria-hidden="true"
          >
            <div class="menu-reveal__book">
              ✦
            </div>
          </div>

          <span class="menu-reveal__eyebrow">
            A LITTLE SOMETHING SPECIAL
          </span>

          <h1 class="menu-reveal__title">
            A Menu Worth Exploring.
          </h1>

          <p class="menu-reveal__description">
            Crafted with care. Served with love.
          </p>

          <div
            class="menu-reveal__progress"
            aria-hidden="true"
          >
            <span></span>
          </div>

          <span class="menu-reveal__loading">
            OPENING YOUR MENU
          </span>

          <a
            class="menu-reveal__fallback"
            href="${pdfUrl}"
          >
            Open PDF directly
          </a>
        </main>
      `;
    } catch {
      newTab.location.replace(pdfUrl);
      setIsOpening(false);
      return;
    }

    // Navigate to PDF after the animation.
    timeoutRef.current = window.setTimeout(() => {
      if (!newTab.closed) {
        newTab.location.replace(pdfUrl);
      }

      setIsOpening(false);
      timeoutRef.current = null;
    }, REVEAL_DURATION);
  };

  return (
    <section className="featured-menu" id="menu">
      <div className="container">
        {/* ===============================
            HEADER
        =============================== */}

        <div className="featured-menu__header">
          <span className="featured-menu__subtitle">
            OUR SIGNATURE MENU
          </span>

          <h2 className="featured-menu__title">
            Crafted Fresh.
            <br />
            Served with Love.
          </h2>

          <p className="featured-menu__description">
            From handcrafted coffees to delicious café favourites,
            every item is prepared using premium ingredients and
            served with passion.
          </p>
        </div>

        {/* ===============================
            TABS
        =============================== */}

        <div className="featured-menu__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`featured-menu__tab ${
                activeTab === tab ? "active" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ===============================
            MENU GRID
        =============================== */}

        <div className="featured-menu__grid">
          {menuData[activeTab].map((item) => (
            <div
              className="featured-menu__card"
              key={item.id}
            >
              <div className="featured-menu__image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="featured-menu__content">
                <h3 className="featured-menu__name">
                  {item.title}
                </h3>

                <p className="featured-menu__text">
                  {item.description}
                </p>

                <div className="featured-menu__bottom">
                  <span className="featured-menu__price">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===============================
            PREMIUM PDF MENU
        =============================== */}

        <div className="featured-menu__footer">
          <span className="featured-menu__footer-eyebrow">
            THE COMPLETE EXPERIENCE
          </span>

          <h3 className="featured-menu__footer-title">
            More to Love. More to Taste.
          </h3>

          <p className="featured-menu__footer-text">
            Your next favourite is waiting.
            Explore our complete menu.
          </p>

          <button
            type="button"
            onClick={handleOpenMenu}
            disabled={isOpening}
            className="featured-menu__pdf-btn"
            aria-label="Open our complete PDF menu in a new tab"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>

            <span>
              {isOpening
                ? "OPENING MENU..."
                : "EXPLORE FULL MENU"}
            </span>

            <span
              className="featured-menu__pdf-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </button>

          <span className="featured-menu__pdf-note">
            THE FULL COLLECTION · PDF MENU
          </span>
        </div>
      </div>

      {/* FALLBACK REVEAL ANIMATION */}

      {isOpening && (
        <div
          className="menu-reveal menu-reveal--overlay"
          role="status"
          aria-live="polite"
        >
          <div
            className="menu-reveal__ornament"
            aria-hidden="true"
          >
            <div className="menu-reveal__book">
              ✦
            </div>
          </div>

          <span className="menu-reveal__eyebrow">
            A LITTLE SOMETHING SPECIAL
          </span>

          <h3 className="menu-reveal__title">
            A Menu Worth Exploring.
          </h3>

          <p className="menu-reveal__description">
            Crafted with care. Served with love.
          </p>

          <div
            className="menu-reveal__progress"
            aria-hidden="true"
          >
            <span />
          </div>

          <span className="menu-reveal__loading">
            OPENING YOUR MENU
          </span>
        </div>
      )}
    </section>
  );
};

export default FeaturedMenu;
