import styles from './styles.module.scss'
import Button from '../../Components/Button/index'

export default function MainPage(){

    const techs = [
        {
            img: '/Logos/FrameJs.png',
            color:'#F7DF1E'
        },
        {
            img: '/Logos/FrameNode.png',
            color: '#5CAC46'
        },
        {
            img: '/Logos/FrameReact.png',
            color: '#00D8FF'
        }
    ]

    const socialMedia = [
        {
            img: '/Logos/Github.png',
            link: 'https://github.com/gonzasuarez96'
        },
        {
            img: '/Logos/Linkedin.png',
            link:'https://www.linkedin.com/in/gonzalo-suarez-dev/'
        }
    ]
    
    return(
        <section className={styles.section}>
            <div className={styles.titulo}>
                <span className={styles.spanNombre}>Hola, me llamo Gonzalo Suarez</span>
                <span className={styles.span}>
                    Y soy <b className={styles.border}>Fullstack Developer</b>
                </span>
                <p>
                    Descripcion de mi perfil
                </p>
                <div className={styles.button}>
                    <Button title='Descargar CV'/>
                    <div className={styles.socialMedia}>
                        {socialMedia.map(item => (
                            <a href={item.link}>
                                <img src={item.img}/>
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.flecha}>
                    <img src='/Logos/Flecha.png' />
                </div>
            </div>


            <div className={styles.image}>
                <div className={styles.imageContainer}>
                    <img src='/Assets/Foto.jpeg' alt='Gonzalo Suarez' />
                    <div className={styles.techs}>
                        {techs.map((tech, index) => (
                            <Tech key={index} img={tech.img} color={tech.color} />
                        ))}
                    </div>
                </div>
            </div>
            
        </section>
    )
}

const Tech = ({ img, color }) => (
    <div className={styles.tech}>
        <img className={styles.techImg} src={img} alt="Tech Logo" style={{ "--tech-border-color": color }} />
    </div>
)