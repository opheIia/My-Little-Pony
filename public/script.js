window.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      window.location.href = '/quiz';
    });
  }
});