// C#'tan tek bir büyük veri paketi alıp tüm çizimleri yapacak olan ana fonksiyon
function renderGame(gameState) {
    const ctx = window.gameCanvasContext;
    if (!ctx || !window.gameImages) return;

    // 1. Ekranı temizle
    ctx.clearRect(0, 0, 288, 512);

    // İSTEK: Arka planı iki kez çiz (kayma efekti için)
    ctx.drawImage(window.gameImages.background, gameState.bgX1, 0, 288, 512);
    ctx.drawImage(window.gameImages.background, gameState.bgX2, 0, 288, 512);

    // 2. Boruları çiz
    gameState.pipes.forEach(pipe => {
        // Alt boru
        ctx.drawImage(window.gameImages.pipe, pipe.x, pipe.y + gameState.pipeGap, pipe.width, pipe.height);
        // Üst boru (ters)
        ctx.save();
        ctx.translate(pipe.x + pipe.width, pipe.y);
        ctx.scale(-1, 1);
        ctx.drawImage(window.gameImages.pipe, 0, 0, pipe.width, -pipe.height);
        ctx.restore();
    });

    // 3. Kuşu çiz
    ctx.drawImage(window.gameImages.bird, gameState.bird.x, gameState.bird.y, gameState.bird.width, gameState.bird.height);

    // 4. Skoru çiz
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.strokeText('Skor: ' + gameState.score, 10, 25);
    ctx.fillText('Skor: ' + gameState.score, 10, 25);

    // 5. Oyun durumuna göre mesajları çiz
    if (gameState.currentState === 0) { // Start
        drawMessage("Başlamak için", "Boşluk Tuşuna Bas");
    } else if (gameState.currentState === 2) { // GameOver
        drawMessage("Oyun Bitti!", "Tekrar denemek için tıkla.");
    }
}

function drawMessage(mainText, subText) {
    const ctx = window.gameCanvasContext;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 256 - 60, 288, 120);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.font = '26px Arial';
    ctx.fillText(mainText, 144, 256 - 10);
    ctx.font = '18px Arial';
    ctx.fillText(subText, 144, 256 + 20);
    ctx.textAlign = 'left';
}


// C#'ın çağıracağı global nesne
window.gameInterop = {
    loadImages: function (imageUrls) {
        window.gameImages = {};
        for (let key in imageUrls) {
            window.gameImages[key] = new Image();
            window.gameImages[key].src = imageUrls[key];
        }
    },
    initCanvas: function (canvasElement) {
        window.gameCanvasContext = canvasElement.getContext('2d');
    },
    // Ana render fonksiyonumuzu C#'a sunuyoruz
    renderGame: renderGame
};