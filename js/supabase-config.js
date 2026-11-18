// GANTI DUA BARIS DI BAWAH INI DENGAN DATA SUPABASE ANDA!
const SUPABASE_URL = 'https://hgjctbucawsdhuyalbow.supabase.co';
const SUPABASE_ANON_KEY = 'TEMPEL_ANON_KEY_ANDA_YANG_PANJANG_DISINI';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;
let citizenData = { nik: "GUEST", name: "Warga Tamu", gender: "Laki-laki", coins: 500 };

function showToast(msg) { alert(msg); }
function closeModal() { document.getElementById('modalContainer').classList.add('hidden'); }
function switchTab(tabId) {
  ['beranda', 'ktp', 'chat'].forEach(t => {
    document.getElementById(`tab-${t}`).classList.add('hidden');
  });
  document.getElementById(`tab-${tabId}`).classList.remove('hidden');
}
