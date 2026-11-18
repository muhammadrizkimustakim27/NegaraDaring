window.sendChatMessage = async () => {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg || !currentUser) return showToast("Login dulu untuk chat!");

  await supabase.from('chat_messages').insert({ user_id: currentUser.id, user_name: citizenData.name, message: msg });
  input.value = '';
};

// Load chat otomatis
supabase.channel('chat_room')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages' }, payload => {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'p-2 bg-sky-100 rounded-lg text-xs';
    div.innerHTML = `<b>${payload.new.user_name}:</b> ${payload.new.message}`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  })
  .subscribe();
