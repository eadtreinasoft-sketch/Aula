const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(filter => {
      filter.classList.toggle('active', filter === button);
      filter.setAttribute('aria-pressed', String(filter === button));
    });
    document.querySelectorAll('.course-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'todos' && card.dataset.category !== button.dataset.filter;
    });
  });
});
document.querySelectorAll('[data-interest]').forEach(link => {
  link.addEventListener('click', () => { document.querySelector('#interest').value = link.dataset.interest; });
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const summary = `SOLICITAÇÃO — TREINASOFT\n\nNome: ${data.get('name')}\nE-mail: ${data.get('email')}\nInteresse: ${data.get('interest')}\n\n${data.get('message')}\n`;
  const url = URL.createObjectURL(new Blob([summary], { type: 'text/plain;charset=utf-8' }));
  const download = document.createElement('a');
  download.href = url;
  download.download = 'solicitacao-treinasoft.txt';
  document.body.append(download);
  download.click();
  download.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  document.querySelector('#form-status').textContent = 'Resumo preparado para download. Nenhuma mensagem foi enviada. Guarde o arquivo para compartilhar pelo canal de atendimento da empresa.';
});
