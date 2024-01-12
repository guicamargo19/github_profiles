import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);
    
    useEffect(()=> {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => resposta.ok ? resposta.json()
        .then(respostaJson => {
            setTimeout(() => {
                setCarregando(false);
                setRepos(respostaJson);
            }, 1000);
            setCarregando(true);
            setErro(false);
        }) : (setErro(true), setCarregando(false)));
        
    }, [nomeUsuario]);

    return (
        <div className="container">
            {erro ? (
                <span className={styles.error}>Usuário digitado não corresponde a um usuário existente.</span>
            ):
            <div>
                {carregando ? (
                    <h2>Carregando...</h2>
                ) : (
                    <ul className={styles.list}>
                        {repos.map(({id, name, language, html_url}) => (
                            <li className={styles.listItem} key={id}>
                                <div className={styles.itemName}>
                                    <b>Projeto:</b>
                                    {name}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem/Tecnologia:</b>
                                    {language}
                                </div>
                                <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            }
        </div>
    )
}

export default ReposList;