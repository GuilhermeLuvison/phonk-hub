const btnEternxlkzTop10 = document.getElementById('btn-eternxlkz-top10');
const eternxlkzTop10 = document.getElementById('eternxlkz-top10');

btnEternxlkzTop10.addEventListener('click', function () {
    const exibicao = !eternxlkzTop10.classList.contains('escondido');

    if (exibicao) {
        eternxlkzTop10.classList.add('escondido');
        btnEternxlkzTop10.textContent = 'Eternxlkz | Veja as 10 músicas mais tocadas no Youtube ⬇️';
    } else {
        eternxlkzTop10.classList.remove('escondido');
        btnEternxlkzTop10.textContent = 'Eternxlkz | Veja as 10 músicas mais tocadas no Youtube ⬆️';
    }
});