import { useState } from 'react';
import styles from './style.module.scss'

export default function Profile(props) {
    const { name, avatar_url, bio, followers, following } = props.user
    const repos = props.repos;
    const [repoAtual, setRepoAtual] = useState(1);
    const [bol, setBol] = useState(false);

    const previous = () => {
        if(repoAtual > 0) {
            setRepoAtual(oldRepoAtual => oldRepoAtual - 1)
        }
        setBol(true)
    }

    const forward = () => {
        if(repoAtual < repos.length - 1) {
            setRepoAtual(oldRepoAtual => oldRepoAtual + 1)
        }
        setBol(true)
    }

    if(bol) {
        if(repoAtual > 0) {
            document.querySelector('.style_arrowLeft__2b9OQ').style.visibility = 'visible';
        } else {
            document.querySelector('.style_arrowLeft__2b9OQ').style.visibility = 'hidden';
        }
        if(repoAtual < repos.length - 1) {
            document.querySelector('.style_arrowRight__3nm_N').style.visibility = 'visible';
        } else {
            document.querySelector('.style_arrowRight__3nm_N').style.visibility = 'hidden';
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <div className={styles.userProfile}>
                    <img src={avatar_url} alt="Foto de perfil" className={styles.imgProfile} />

                    <div className={styles.nameProfile}>
                    <img src="githubpeq.png" alt="Icone Perfil"></img>
                    <h2>{name}</h2>
                    </div>

                    <p className={styles.numbers}>{
                        `${followers} Seguidores ${following} Seguindo`
                    }</p>
                </div>
                
                <p className={styles.bio}>{bio}</p>
            </div>

            <div className={styles.repo}>
                <img src='next.png' alt="Arrow left" className={styles.arrowLeft} onClick={previous}/>
                    <div className={styles.containerRepo}>

                        <div className={styles.textRepo}>
                            <h2>{repos[repoAtual].name}</h2>
                            <p>{repos[repoAtual].description}</p>
                            <span>{repos[repoAtual].language}</span>
                        </div>

                        <a href={repos[repoAtual].html_url} className={styles.clickArea}>
                        <div>
                            <img src='go-to-location.svg' alt="goto" className={styles.goto}/>
                        </div>
                        </a>
                    </div>
                <img src='next.png' alt="Arrow right" className={styles.arrowRight} onClick={forward}/>
            </div>
        </div>
        
    )
}