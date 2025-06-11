import styles from './Categories.module.css'


export default function Categories({ selectedCategory, setSelectedCategory, label, svg }) {

  return (
    <div className={styles.categoriesTab} style={{overflow: 'unset'}}>
        <button
          key={label}
          onClick={() => setSelectedCategory(label)}
          className={selectedCategory === label ? styles.active : ""}
        >
          <div>
            {svg({
              fill: selectedCategory === label ? "#FEEA4F" : "white",
              stroke: selectedCategory === label ? "#FEEA4F" : "white",
            })}
          </div>
          <span>{label}</span>
        </button>
    </div>
  );
}
