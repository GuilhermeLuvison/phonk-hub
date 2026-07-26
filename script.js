const btnEternxlkzTop10 = document.getElementById('btn-eternxlkz-top10');
const eternxlkzTop10Capsula = document.getElementById('eternxlkz-top10-capsula');

btnEternxlkzTop10.addEventListener('click', function () {
    const expandido = eternxlkzTop10Capsula.classList.contains('expandido');

    if (expandido) {
        eternxlkzTop10Capsula.style.maxHeight = eternxlkzTop10Capsula.scrollHeight + 'px';
        eternxlkzTop10Capsula.offsetHeight;
        eternxlkzTop10Capsula.classList.remove('expandido');
        eternxlkzTop10Capsula.style.maxHeight = '0px';
        btnEternxlkzTop10.textContent = 'Eternxlkz | Veja as 10 músicas mais tocadas no Youtube ⬇️';
    } else {
        eternxlkzTop10Capsula.classList.add('expandido');
        eternxlkzTop10Capsula.style.maxHeight = eternxlkzTop10Capsula.scrollHeight + 'px';
        btnEternxlkzTop10.textContent = 'Eternxlkz | Veja as 10 músicas mais tocadas no Youtube ⬆️';
    }
});

eternxlkzTop10Capsula.addEventListener('transitionend', function (evento) {
    if (evento.propertyName === 'max-height' && eternxlkzTop10Capsula.classList.contains('expandido')) {
        eternxlkzTop10Capsula.style.maxHeight = 'none';
    }
});

window.addEventListener('resize', function () {
    if (eternxlkzTop10Capsula.classList.contains('expandido')) {
        eternxlkzTop10Capsula.style.maxHeight = 'none';
        const altura = eternxlkzTop10Capsula.scrollHeight;
        eternxlkzTop10Capsula.style.maxHeight = altura + 'px';
    }
});