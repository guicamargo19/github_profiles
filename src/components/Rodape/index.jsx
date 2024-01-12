import styles from './Rodape.module.css';

const Rodape = () => {
    return (
        <footer className={styles.footer}>
        <div>
            <ul className={styles.footer__links}>
                <li className={styles.footer__links__item}>
                    <a href="https://www.linkedin.com/in/guilherme-ferreira-camargo/">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
                <li className={styles.footer__links__item}>
                    <a href="https://github.com/guicamargo19">
                        <i className="bi bi-github"></i>    
                    </a>
                </li>
            </ul>
            <p className={styles.footer__main__text}>
                ® 2024 Guilherme Camargo. Todos os direitos reservados.
            </p>
            <p className={styles.footer__last__text}>
                Página desenvolvida no curso de Full Stack Python na EBAC - Escola Britânica de Artes Criativas e Tecnologia.              
            </p>
        </div>
    </footer>
    )
}

export default Rodape;



