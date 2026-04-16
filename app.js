let currentRole = 'passenger';

// Splash → Landing after 2 seconds
setTimeout(() => {
  document.getElementById('splash').classList.remove('active');
  document.getElementById('landing').classList.add('active');
}, 2000);

// Navigate between screens
function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Select a role and go to login
function selectRole(role) {
  currentRole = role;
  const labels = {
    passenger: '🙋 Passenger',
    rider: '⚡ Rider',
    admin: '🛡️ Admin'
  };
  document.getElementById('loginRoleBadge').textContent = labels[role];
  go('login');
}

// Enter the app after login
function enterApp() {
  const badges = { passenger: 'Passenger', rider: 'Rider', admin: 'Admin' };
  document.getElementById('appBadge').textContent = badges[currentRole];

  ['passengerView', 'riderView', 'adminView'].forEach(v =>
    document.getElementById(v).classList.remove('active')
  );

  if (currentRole === 'passenger') document.getElementById('passengerView').classList.add('active');
  else if (currentRole === 'rider')    document.getElementById('riderView').classList.add('active');
  else                                 document.getElementById('adminView').classList.add('active');

  go('app');
}

// Passenger bottom nav tabs
function pTab(name, idx) {
  document.querySelectorAll('[id^="pn"]').forEach((b, i) => b.classList.toggle('on', i === idx));
  document.querySelectorAll('#passengerView .tab').forEach(t => t.classList.remove('on'));
  document.getElementById('p-' + name).classList.add('on');
}

// Rider bottom nav tabs
function rTab(name, idx) {
  document.querySelectorAll('[id^="rn"]').forEach((b, i) => b.classList.toggle('on', i === idx));
  document.querySelectorAll('#riderView .tab').forEach(t => t.classList.remove('on'));
  document.getElementById('r-' + name).classList.add('on');
}

// Admin bottom nav tabs
function aTab(name, idx) {
  document.querySelectorAll('[id^="an"]').forEach((b, i) => b.classList.toggle('on', i === idx));
  document.querySelectorAll('#adminView .tab').forEach(t => t.classList.remove('on'));
  document.getElementById('a-' + name).classList.add('on');
}
