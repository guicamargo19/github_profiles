import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    
    useEffect(()=> {
        setCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => resposta.json())
        .then(respostaJson => {
            setTimeout(() => {
                setCarregando(false);
                setRepos(respostaJson);
            }, 1500);
        });
    }, [nomeUsuario]);
    
    return (
        <div className="container">
            {carregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({id, name, language, html_url}) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
                )}
        </div>
    )
}

export default ReposList;