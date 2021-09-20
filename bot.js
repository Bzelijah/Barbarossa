require('dotenv').config();
const { Keyboard } = require('telegram-keyboard');
const {
  Telegraf,
} = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

function getRandomName() {
  const names = [
    'Меткий Джек',
    'Острый Стив',
    'Слепой Пью',
    'Джон Сильвер',
    'Капитан Флинт',
    'Воробьиный Потрох',
    'Джон Флинт',
    'Билли Прихлоп',
    'Жан Голди',
    'Одноглазый Джонни',
    'Бешенный Джеки',
    'Барбосса Ордо',
    'Генри Пенька',
    'Мясник Джордж',
    'Синяя Борода',
    'Доктор Сивли',
    'Длинноногий Бенни',
    'Черный Ворон',
    'Обрубленный Марти',
    'Билли Бенбоу',
  ];

  const randomIdx = Math.floor(Math.random() * (names.length - 1));
  return names[randomIdx];
}

bot.start((ctx) => {
  const keyboard = Keyboard.make(['/pirateName']).reply();
  ctx.reply('Якорь мне в бухту! Ahoy, matey! Без пиратского имени в морях делать нечего. Могу помочь 😉', keyboard);
});

bot.command('/pirateName', (ctx) => {
  const name = getRandomName();
  ctx.reply(`Теперь твоё имя ${name}.`);
});

bot.launch();
