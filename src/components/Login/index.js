import styles from './style.module.scss'
import api from '../../services/api.js'

export default function Login(props) {
    const getUser = async () => {
        if(props.value === '') {return }

        try{
            const { data } = await api.get(props.value)
            const response = await api.get(`${props.value}/repos`)
            props.setUser(data);
            props.setRepos(response.data);
        } catch(error) {
            alert('Usuário Inválido');
            document.location.reload(true)
            console.log(error)
        }
        if(props.logged === false) {
            props.setLogged(true)
        }
    }


        return (
            <div className={styles.container}>
                <img src='githubgran.png' alt="Logo do Github"></img>
                <input type="text" 
                        id="user" 
                        placeholder="Procure por um usuário do Github..." 
                        value={props.value}
                        onChange={(event) => props.setValue(event.target.value)}
                        />
                        
                <button type="button" onClick={getUser}>PESQUISAR</button>
            </div>
        )
}