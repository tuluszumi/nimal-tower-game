document.addEventListener('DOMContentLoaded', () => {
    const tower = document.getElementById('tower');
    let animals = [];
    let animalIndex = 0;
    
    function createAnimal() {
        const animalTypes = ['images/cat.jpeg', 'images/dog.jpeg', 'images/rabbit.jpeg']; // JPEG画像のパス
        const animalImage = document.createElement('img');
        animalImage.src = animalTypes[animalIndex % animalTypes.length];
        animalImage.className = 'animal';
        animalImage.style.bottom = `${animalIndex * 100}px`; // 動物の積み重ね位置
        animalImage.style.left = `${Math.random() * (tower.clientWidth - 100)}px`; // ランダムな位置

        tower.appendChild(animalImage);
        animals.push(animalImage);
        
        animalIndex++;
    }

    function checkGameOver() {
        if (animalIndex > 10) { // 例えば、10匹以上積み上げたらゲームオーバー
            alert('ゲームオーバー！');
            resetGame();
        }
    }

    function resetGame() {
        tower.innerHTML = '';
        animals = [];
        animalIndex = 0;
    }

    setInterval(() => {
        createAnimal();
        checkGameOver();
    }, 1000); // 1秒ごとに動物を追加
});
