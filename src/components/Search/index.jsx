import styles from './Search.module.css';

const Search = ({nomeUsuario}) => {
    return (
        <div className={styles.search}>
            <h1>GitHub Profiles</h1>
            <p>Acesse o perfil do usuário desejado:</p>
            <input type="text" onBlur={nomeUsuario}/>
        </div>
    )
}

export default Search;