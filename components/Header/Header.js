import styles from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../../hooks/useUser';
import { useLogout } from '../../hooks/useLogout';

export default function Header() {
  const router = useRouter();
  const { loggedIn } = useUser();
  const { logoutUser } = useLogout();

  const handleLogOut = () => {
    logoutUser();
  };

  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <Link href='/'>
              <img className={styles.homeIcon} src='./images/home.svg' alt='Go back home.' />
            </Link>
          </li>
          <li>
            <Link
              href='/copy'
              style={{
                color: router.asPath === '/copy' ? 'var(--primary)' : 'var(--textColor)',
              }}
            >
              The Copy Room
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut} className={styles.authButton}>
              {loggedIn ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
