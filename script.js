function generateQR() {
  let qrText = document.getElementById("qrText").value;
  let qrContainer = document.getElementById("qrcode");
  let downloadBtn = document.getElementById("downloadBtn");

  if (qrText.trim() === "") {
    alert("Please enter some text or URL");
    return;
  }

  qrContainer.innerHTML = ""; // Clear previous QR code

  new QRCode(qrContainer, {
    text: qrText,
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Show download button after QR generation
  setTimeout(() => {
    downloadBtn.style.display = "block";
  }, 500);
}

function downloadQR() {
  let qrCanvas = document.querySelector("#qrcode canvas");

  if (!qrCanvas) {
    alert("Generate QR Code first!");
    return;
  }

  let qrDataURL = qrCanvas.toDataURL("image/png");

  let a = document.createElement("a");
  a.href = qrDataURL;
  a.download = "qrcode.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
// Generate floating squares dynamically
function createSquares() {
  const background = document.querySelector(".background");
  for (let i = 0; i < 30; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.left = Math.random() * 100 + "vw";
    square.style.animationDuration = Math.random() * 5 + 5 + "s"; // Speed variation
    square.style.width = square.style.height = Math.random() * 15 + 10 + "px"; // Size variation
    background.appendChild(square);

    setTimeout(() => {
      square.remove();
    }, 10000); // Remove after animation ends
  }
}

setInterval(createSquares, 1000); // Keep generating new squares
