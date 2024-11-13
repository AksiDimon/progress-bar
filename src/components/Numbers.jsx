import s from './ProgressBar.module.css';

export function Numbers({thresholds}) {
    const needThresholds = thresholds.slice(1)
    const newThresholds = [0, '20/25', ...needThresholds]
    return (
        <div className={s.values}>
            {newThresholds.map(threshold => <div className={s.value}> {threshold} </div>)}
        </div>
    )

}