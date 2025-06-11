

import { Range } from 'react-range';
import styles from './FilterSidebar.module.css'


const MIN = 0;
const MAX = 20000;
const STEP = 100;
export default function PriceFilter({ priceRange, setPriceRange }) {
    
    return (
        <div className={styles.section}>
            <h4 className={styles.filterHead}>Price</h4>
            <div className={styles.rangeValues}>
            {`AED ${priceRange[0]} - AED ${priceRange[1]}`}
            </div>
            <Range
                values={priceRange}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => {
                    const { key, ...restProps } = props;
                    return (
                      <div key={key} {...restProps} className={styles.track}>
                        {children}
                      </div>
                    );
                  }}
                  renderThumb={({ props }) => {
                    const { key, className, ...restProps } = props;
                    return (
                      <div
                        key={key}
                        {...restProps}
                        className={`${className} ${styles.thumb}`} // ← combine both
                      />
                    );
                  }}/>
            <div className={styles.rangeLabels}>
                <span>AED {MIN}</span>
                <span>AED {MAX}</span>
            </div>
        </div>
    )
}