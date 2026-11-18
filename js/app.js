window.registerCitizenKtp = async () => {
  if (!currentUser) return showToast("Login dulu!");
  citizenData.name = document.getElementById('inpKtpName').value || citizenData.name;
  citizenData.gender = document.getElementById('inpKtpGender').value;
  
  await supabase.from('users').update({ name: citizenData.name, gender: citizenData.gender }).eq('id', currentUser.id);
  
  document.getElementById('ktpCardName').textContent = citizenData.name;
  document.getElementById('ktpCardNik').textContent = citizenData.nik;
  document.getElementById('ktpPreviewBox').classList.remove('hidden');
  showToast("✅ KTP Berhasil Dicetak!");
};
