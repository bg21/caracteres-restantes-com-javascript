window.addEventListener('load', () => {
	const textarea = document.getElementById('textarea');
	const restante = document.getElementById('restante');
	const maximo = 100;

	textarea.addEventListener('input', function () {
		const restanteCaractere = maximo - textarea.value.length;
		restante.textContent = restanteCaractere + ' caracteres restantes.';
	});
});
