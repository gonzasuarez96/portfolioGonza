import styles from './styles.module.scss'
import Button from '../Button/index.jsx'


export default function NavBar() {
    return(
        <nav className={styles.navbar}>
            <span className={styles.logo}>
                <b>Gonzalo</b> Suarez
            </span>
            <ul className={styles.links}>
                <li>
                    <b>Inicio</b>
                </li>
                <li>
                    <b>Proyectos</b>
                </li>
                <li>
                    <b>Experiencia</b>
                </li>
            </ul>
            <Button title='Contacto'/>
            
        </nav>
    )
}