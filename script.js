
funtion copiarTexto() {
    const textarea = document.getElementById('textarea');
    const btncopiar = document.getElementById('btncopiar');

    btncopiar.addEventListener('click', () => {
        textarea.select();
        document.execCommand('copy');
    });
}






