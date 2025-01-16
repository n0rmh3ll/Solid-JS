import { Component, createSignal, onMount } from 'solid-js';
import styles from './App.module.css';
import Loader from './components/Loader';

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(true);
  const [showContact, setShowContact] = createSignal(false);

  onMount(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  const handleContact = () => {
    window.location.href = 'mailto:example@gmail.com';
  };

  return (
    <>
      {isLoading() && <Loader />}
      <div class={styles.app}>
        <header class={styles.header}>
          <h1 class={styles.title}>John Doe</h1>
        </header>
        <main class={styles.main}>
          <div class={styles.imageContainer}>
            <img
              src="https://placecats.com/300/300"
              alt="John Doe"
              class={styles.profileImage}
            />
          </div>
          <div class={styles.bio}>
            <p>
              Hi, I'm John Doe, a passionate web developer with 5 years of experience in creating
              beautiful and functional websites. I specialize in modern frontend technologies
              and love bringing ideas to life through code.
            </p>
            <p>
              When I'm not coding, you can find me exploring nature, reading sci-fi novels,
              or experimenting with new recipes in the kitchen.
            </p>
          </div>
        </main>
        <footer class={styles.footer}>
          <p>&copy; 2025 John Doe. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;

