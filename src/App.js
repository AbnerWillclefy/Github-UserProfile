import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile'
import styles from './styles/app.module.scss'

function App() {
  const [value, setValue] = useState('');
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([]);
  const [logged, setLogged] = useState(false);

  if(logged === false) {
    return (
      <main className={styles.mainContainer}>
      <Login value={value} setValue={setValue} setUser={setUser} setRepos={setRepos} setLogged={setLogged} logged={logged}/>
      </main>
    )
  } else {
    return (
      <main className={styles.mainContainer}> 
      <Profile user={user} repos={repos}/>
      </main>
    );
  }
}

export default App;
