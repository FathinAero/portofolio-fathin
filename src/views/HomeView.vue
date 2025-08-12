<template>
  <div class="hero-container">
    <div class="hero-text">
      <h1 class="Josefin">Hello, there!</h1>
      <h1 class="Josefin">I am Fathin</h1>
      <p>
        I dedicated to myself the pursuit of knowledge in Computer Engineering at Universitas
        Indonesia, with an insatiable curiosity for pushing the boundaries of technology.
      </p>
    </div>

    <div class="hero-buttons">
      <RouterLink to="/projects">
        <div class="custom-button" id="projects-button">
          <span>Projects</span>
        </div>
      </RouterLink>
      <RouterLink to="/experiences">
        <div class="custom-button" id="experiences-button">
          <span>Experiences</span>
        </div>
      </RouterLink>
      <RouterLink to="/about">
        <div class="custom-button" id="about-button">
          <span>About me</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  gap: 4rem;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

/* --- Kolom Kiri --- */
.hero-text {
  flex: 1; /* Mengambil ruang yang tersedia */
  max-width: 500px;
}

.hero-text h1 {
  font-size: 4rem; /* Ukuran font bisa disesuaikan */
  margin: 0;
  line-height: 1.1;
  color: var(--color-primary2); /* Warna hijau tua, sesuaikan dengan tema Anda */
  text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
}

.hero-text p {
  font-size: 1rem;
  margin-top: 1.5rem;
  color: var(--color-primary2);
  line-height: 1.6;
}

/* --- Kolom Kanan --- */
.hero-buttons {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
}

.custom-button {
  height: 90px;
  padding: 1rem;
  border-radius: 20px;

  /* Properti untuk gambar background */
  background-size: cover;
  background-position: center;

  /* Properti untuk menengahkan teks */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;

  position: relative; /* Penting untuk overlay */
  overflow: hidden; /* Agar sudut gambar ikut membulat */
  transition: transform 0.3s ease; /* Transisi untuk hover */

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.custom-button:hover {
  transform: scale(1.1); /* Efek membesar saat di-hover */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Overlay gelap di atas gambar */
.custom-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); /* Overlay hitam 40% transparan */
  backdrop-filter: blur(2px);
  z-index: 1;
}

/* Teks di atas overlay */
.custom-button span {
  position: relative;
  z-index: 2;
}

.hero-buttons a {
  text-decoration: none;
}

/* Menerapkan gambar background yang berbeda untuk setiap tombol */
#projects-button {
  background-image: url('@/assets/images/bg-projects.jpg');
}
#experiences-button {
  background-image: url('@/assets/images/bg-experiences.jpg');
}
#about-button {
  background-image: url('@/assets/images/bg-about.jpg');
}
</style>
