window.onload = () => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) { currentUser = session.user; loadProfile(); }
  });
};

window.openAuthModal = () => {
  document.getElementById('modalContentBody').innerHTML = `
    <h3 class="font-bold text-lg text-center">Login Warga</h3>
    <button onclick="signInGoogle()" class="civic-btn w-full py-2 bg-white border text-slate-800 font-bold text-xs rounded-xl">🔵 Masuk dengan Google</button>
  `;
  document.getElementById('modalContainer').classList.remove('hidden');
};

window.signInGoogle = async () => {
  await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } });
};

async function loadProfile() {
  const { data } = await supabase.from('users').select('*').eq('id', currentUser.id).single();
  if (data) citizenData = data;
  document.getElementById('btnLogin').textContent = '👤 ' + citizenData.name;
}
