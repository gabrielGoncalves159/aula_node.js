const { DateTime } = require('luxon');

const today = DateTime.now();

// 01 Atividade - Criar e imprimir o dia de ontem
const yesterday = (today.minus({day: 1}));

console.log(`\nData de Ontem: ${yesterday.setLocale('pt-BR')
    .toLocaleString(DateTime.DATE_SHORT)}`,`\n\n`);

// 02 Atividade - Criar o dia 5 do mês de Julho deste ano às 15h usando o método fromObject
const fiveJuly15hs = DateTime.fromObject(
    {day: 5, month: 7, year: 2022, hour: 15},
    {zone: 'America/Sao_Paulo'},
);

console.log(`Data utilizando o FromObject : ${fiveJuly15hs.setLocale('pt-BR')
    .toLocaleString(DateTime.DATETIME_SHORT)}\n\n`);

// 03 Atividade - Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera de natal de 1980.

const christmasEve1980 = DateTime.fromObject(
    {day: 24, month: 12, year: 1980},
    {zone: 'Europe/Berlin'}
);

const weekdayFifteenDaysBefore1980XmasEve = (christmasEve1980
    .setLocale('de')
    .minus({days: 15})
    .toLocaleString({weekday: 'long'})
);

console.log(`${weekdayFifteenDaysBefore1980XmasEve}\n\n`);