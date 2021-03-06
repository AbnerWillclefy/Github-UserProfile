import { useEffect, useState } from 'react';
import styles from './style.module.scss'

export default function Profile(props) {
    const { name, avatar_url, bio, followers, following } = props.user
    const repos = props.repos;
    const [repoAtual, setRepoAtual] = useState(0);
    const [arrowLeftState, setArrowLeftState] = useState(true)
    const [arrowRightState, setArrowRightState] = useState(true)

    const previous = () => {
        if(repoAtual > 0) {
            setRepoAtual(oldRepoAtual => oldRepoAtual - 1)
        }
    }

    const forward = () => {
        if(repoAtual < repos.length - 1) {
            setRepoAtual(oldRepoAtual => oldRepoAtual + 1)
        }
    }

    useEffect(() => {
        switch(repoAtual) {
            case 0: 
                setArrowLeftState(false)
                break;
            case repos.length - 1: 
                setArrowRightState(false)
                break;
            default :
                setArrowLeftState(true) 
                setArrowRightState(true)
                break;    
        }
    }, [repoAtual, repos])

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
                <img src='next.png' alt="Arrow left" className={arrowLeftState ? styles.arrowLeft : styles.noDisplay} onClick={previous}/>
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
                <img src='next.png' alt="Arrow right" className={arrowRightState ? styles.arrowRight : styles.noDisplay} onClick={forward}/>
            </div>
        </div>
        
    )
}