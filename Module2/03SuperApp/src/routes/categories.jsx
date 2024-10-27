import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories";

import "../index.css";
import styles from "./categories.module.css";

const CategoriesPage = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  // To select the new category of if selected already remove it
  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.some((c) => c === category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // As we are using localstorage so now we need to store it
  const saveCategories = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      console.error("User not founud in localStorage");
      navigate("/login");
    }
    user.categories = selected;
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveCategories();
    navigate("/");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      console.error("User not founud in localStorage");
      navigate("/login");
    }

    // if user has already selected categories no need of prompt asking categories again and again, redirect to dashboard
    // TODO: maybe allow user to change categories later
    if (user.categories.length > 0) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h1 className="appName">Super app</h1>
          <h2 className={styles.title}>Choose your entertainment category</h2>
          {/* Left side of the page */}
          <div
            className={`${styles.selectedCategories} ${
              selected.length > 0 ? styles.visible : styles.hidden
            }`}
          >
            {selected.map((category) => (
              <span key={category} className={styles.selectedCategory}>
                {category}{" "}
                <button onClick={() => toggleCategory(category)}>x</button>
              </span>
            ))}
          </div>
          {
            // If there are less than 3 categories
            <p
              className={`${styles.warning} ${
                styles.length < 3 ? styles.visible : styles.hidden
              }`}
            >
              Minimum 3 category required
            </p>
          }
        </div>

        {/* Right side of the page */}
        <div className={styles.rightSection}>
          <div className={styles.categoryGrid}>
            {categories.map((category) => {
              <button
                key={category.name}
                className={styles.categoryButton}
                style={{
                  backgroundColor: category.color,
                  boxShadow: selected.includes(category.name)
                    ? "0 0 0 4px #148A14"
                    : "none",
                }}
                onClick={() => toggleCategory(category.name)}
              >
                <h3>{category.name}</h3>
                <img src={category.image} alt={category.name} />
              </button>;
            })}
          </div>
          <div className={styles.nextButtonContainer}>
            <button
              className={styles.nextButton}
              disabled={selected.length < 3}
              onClick={handleSubmit}
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;