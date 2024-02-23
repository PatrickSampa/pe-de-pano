export function defineIntervaloPrazo(): [string, string]{

    const prazoInicio = new Date();
    const prazoFim = new Date();

    prazoFim.setDate(prazoInicio.getDate() + 5);

    const formatPrazoInicio = prazoInicio.toISOString().slice(0, 19).replace('T', ' ');
    const formatPrazoFinal = prazoFim.toISOString().slice(0, 19).replace('T', ' ');

    return [formatPrazoInicio, formatPrazoFinal];

}