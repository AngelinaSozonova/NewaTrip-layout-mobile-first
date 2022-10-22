window.addEventListener('DOMContentLoaded', () => {
    const btnsBox = document.querySelectorAll('.cards-item__box');

    btnsBox.forEach(box => {
        const btnTimeAll = box.querySelectorAll('.btn-time');

        if (btnTimeAll.length > 3) {
            const btnMore = document.createElement('button');

            btnMore.classList.add('cards-item__block-time');
            btnMore.classList.add('btn-reset');

            btnMore.textContent = 'eщё...';
            box.appendChild(btnMore);

            //Кнопка "ещё"
            btnMore.addEventListener('click', () => {
                let closeBtnTime = box.querySelectorAll('.opacity-btn');

                for (let i=0; i < closeBtnTime.length; i++) {
                    closeBtnTime[i].classList.remove('opacity-btn');

                    if (closeBtnTime[i+1] == undefined) btnMore.remove();
                    if (i % 3 === 0 && i !== 0) return;
                }
            });
        }

        btnTimeAll.forEach(btnTime => {
            btnTime.addEventListener('click', function(e) {
                btnTimeAll.forEach(btn => {
                    if (btn !== btnTime) btn.classList.remove('active-time');
                });

                btnTime.classList.toggle('active-time');
            });
        });

    })
})