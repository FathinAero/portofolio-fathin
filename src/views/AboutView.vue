<script setup>
// Cara yang benar untuk mengimpor gambar di Vue + Vite
import profileImage from '@/assets/images/pp.jpg'
</script>

<template>
  <div class="about-page">
    <h1>Tentang Saya</h1>
    <div class="content">
      <div class="profile-picture">
        <img :src="profileImage" alt="Foto Profil" />
      </div>
      <div class="bio">
        <p>
          Hello! I am <strong>Fathin Umara Aero</strong>, dedicated to the pursuit of knowledge in
          Computer Engineering at Universitas Indonesia, with an insatiable curiosity for pushing
          the boundaries of technology.
        </p>
        <p>
          Committed to advancing computer systems and software development, with high interest in
          Web Development, Software Development, and UI/UX. Eager to learn and innovate, highly
          adaptable and driven professional with a strong passion for technology.
        </p>

        <h2>Skills</h2>
        <ul class="skills-list">
          <li>Vue.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Express.js</li>
          <li>Android Studio</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
          <li>C/C++</li>
        </ul>
        <h2>Contacts</h2>
        <div class="contact-list">
          <a href="mailto:aerofathin000@gmail.com" class="contact-item">
            <img src="@/assets/icons/email.svg" alt="Email Icon" class="contact-icon" />
            <span>aerofathin000@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/fathin-umara-aero"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >
            <img src="@/assets/icons/linkedin.svg" alt="LinkedIn Icon" class="contact-icon" />
            <span>LinkedIn : Fathin Umara Aero</span>
          </a>

          <a
            href="https://instagram.com/fathin.aero"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >
            <img src="@/assets/icons/instagram.svg" alt="Instagram Icon" class="contact-icon" />
            <span>Instagram : @fathin.aero</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 900px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.profile-picture {
  flex: 0 0 200px;
}

.profile-picture img {
  width: 200px;
  height: 200px;
  border-radius: 20%;
  border: 4px solid #42b983;
  object-fit: cover;
  object-position: 50% 0%;
}

.bio p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skills-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skills-list li {
  background-color: var(--color-primary);
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 20px;
  font-weight: 500;
}
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-icon {
  width: 28px;
  height: 28px;
  filter: invert(24%) sepia(10%) saturate(837%) hue-rotate(159deg) brightness(95%) contrast(88%); /* Sesuaikan filter ini dengan warna --color-text Anda */
  transition: filter 0.3s ease;
}

.contact-item:hover {
  color: var(--color-primary);
}

.contact-item:hover .contact-icon {
  filter: invert(39%) sepia(77%) saturate(2909%) hue-rotate(136deg) brightness(96%) contrast(93%);
}
</style>
