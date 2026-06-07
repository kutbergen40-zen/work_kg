import styles from "./Breadcrumbs.module.css";

function Breadcrumbs({ items }) {
  return (
    <div className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index !== items.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;