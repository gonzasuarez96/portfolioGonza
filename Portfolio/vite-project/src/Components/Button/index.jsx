import styles from './styles.module.scss'

export default function Button({title, onClick}){
    return (
        <button className={styles.button} onClick={onClick}>{title}</button>
    )
}