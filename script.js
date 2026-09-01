window.addEventListener("load", () => {
  setTimeout(() => {
    const boot = document.getElementById("bootScreen");
    if (!boot) return;
    boot.style.transition = "opacity .4s";
    boot.style.opacity = "0";
    setTimeout(() => boot.remove(), 450);
  }, 1900);
});

// EMAIL ME copies the email address and shows a small confirmation popup.
const emailButton = document.getElementById("emailButton");
const emailPopup = document.getElementById("emailPopup");
const emailPopupClose = document.getElementById("emailPopupClose");
const emailAddress = "rishimunibnk2007@gmail.com";
let popupTimer;

function showEmailPopup() {
  if (!emailPopup) return;
  emailPopup.classList.add("show");
  emailPopup.setAttribute("aria-hidden", "false");
  clearTimeout(popupTimer);
  popupTimer = setTimeout(() => closeEmailPopup(), 6000);
}

function closeEmailPopup() {
  if (!emailPopup) return;
  emailPopup.classList.remove("show");
  emailPopup.setAttribute("aria-hidden", "true");
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(emailAddress);
  } catch (error) {
    const temp = document.createElement("textarea");
    temp.value = emailAddress;
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }
  showEmailPopup();
}

if (emailButton) emailButton.addEventListener("click", copyEmail);
if (emailPopupClose) emailPopupClose.addEventListener("click", closeEmailPopup);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeEmailPopup();
});
