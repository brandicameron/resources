import Head from 'next/head';
import styles from '../components/resources/Resources.module.css';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, onSnapshot, orderBy } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '../hooks/useUser';
import Header from '../components/Header/Header';
import ResourceCard from '../components/Resources/ResourceCard';
import AddCategoryForm from '../components/Resources/AddCategoryForm';
import Login from '../components/Login/Login';

export default function Home({ resources }) {
  const [data, setData] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const { loggedIn } = useUser();

  useEffect(() => {
    if (resources) {
      setData(resources);
    }
  }, []);

  useEffect(() => {
    // realtime listener
    const collRef = collection(db, 'Resources');
    const q = query(collRef, orderBy('category'));

    const unsub = onSnapshot(q, (snapshot) => {
      let tempData = [];
      snapshot.docs.forEach((doc) => {
        tempData.push({ id: doc.id, ...doc.data() });
      });
      setData(tempData);
    });

    return () => unsub();
  }, []);

  const handleOpenForm = () => {
    setOpenForm(true);
  };
  return (
    <>
      <Head>
        <title>Code Resources</title>
        <meta name='description' content='Code Resources' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className={styles.heading}>Resources</h1>
      <section className={styles.container}>
        {data && data.map((section) => <ResourceCard key={uuidv4()} section={section} />)}
        {loggedIn && (
          <div className={styles.addCategory}>
            <button
              title='Add New Category'
              className={styles.addCategoryBtn}
              aria-label='Add a new category.'
              onClick={handleOpenForm}
            >
              +
            </button>
            {openForm && <AddCategoryForm openForm={openForm} setOpenForm={setOpenForm} />}
          </div>
        )}
      </section>
      {!loggedIn && <Login />}
    </>
  );
}

export async function getStaticProps() {
  let resources = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'Resources'));
    querySnapshot.forEach((doc) => {
      resources.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      resources: JSON.parse(JSON.stringify(resources)),
    },
  };
}
