// 1. Toggle tema
const toggle = document.getElementById('theme-toggle');
toggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};
if (localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark-mode');
}

// 2. Voice‑note play
document.getElementById('play-note').onclick = () => {
  document.getElementById('note-audio').play();
};

// 3. Relacionar posts / enlaces contextuales
const suggestions = [
  {text: '¿Quieres saber más sobre contraseñas seguras?', href:'#seguridad'},
  {text: '¿Cómo manejar redes sin ansiedad?', href:'#emocional'}
];
const area = document.getElementById('suggestions');
suggestions.forEach(s => {
  const a = document.createElement('a');
  a.href = s.href; a.textContent = s.text;
  area.appendChild(a);
});

// Tema claro/oscuro
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};

