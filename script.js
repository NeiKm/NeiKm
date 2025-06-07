function isMobileOrTablet() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

if (isMobileOrTablet()) {
    document.documentElement.innerHTML = "";

    const blockMessage = document.createElement("div");
    blockMessage.innerHTML = `
        <h1>😅 Hey there, mobile user!</h1>
        <p>I haven’t made a proper mobile version of this site yet — to be honest, I’ve just been too lazy to do it.</p>
        <p>Even the desktop version isn’t fully finished, so for now it only works (kinda) on computers.</p>
        <p>I’ll get to mobile support eventually... probably. 😄</p>
        <p>Thanks for dropping by anyway ❤️</p>
    `;

    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    blockMessage.style.position = "fixed";
    blockMessage.style.top = "50%";
    blockMessage.style.left = "50%";
    blockMessage.style.transform = "translate(-50%, -50%)";
    blockMessage.style.background = "linear-gradient(135deg, #1a1a2e, #16213e)";
    blockMessage.style.color = "white";
    blockMessage.style.fontSize = "18px";
    blockMessage.style.padding = "30px";
    blockMessage.style.borderRadius = "16px";
    blockMessage.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
    blockMessage.style.fontFamily = "'Nunito', sans-serif";
    blockMessage.style.textAlign = "center";
    blockMessage.style.width = "90%";
    blockMessage.style.maxWidth = "500px";
    blockMessage.style.animation = "fadeIn 1s ease-in-out";

    document.body.style.background = "black";
    document.body.style.margin = "0";
    document.body.appendChild(blockMessage);

    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
        h1 {
            margin-bottom: 20px;
            font-size: 26px;
            color: #00f0ff;
        }
        p {
            margin: 10px 0;
        }
    `;
    document.head.appendChild(style);
}

