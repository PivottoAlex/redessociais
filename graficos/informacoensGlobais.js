const url = 'https://github.com/guilhermeonrails/api/blob/main/dados-globais.json'

async function visualizarInformacoenGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const paragrafo = document.createAttribute.Element('p');
    paragrafo.classlist.add("graficos-container__texto")
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`
    visualizarInformacoenGlobais();
}