const form = document.getElementById("messageForm");
const messageInput = document.getElementById("message");
const messagesList = document.getElementById("messagesList");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // جلوگیری از رفرش صفحه

  const msg = messageInput.value.trim();
  if(msg === "") return; // خالی نباشه

  const li = document.createElement("li");
  li.textContent = msg;
  messagesList.appendChild(li);

  messageInput.value = ""; // پاک کردن textarea بعد ارسال
});