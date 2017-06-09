export default {
  pages: {
    welcome: {
      title: `Правила игры`,
      text: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`
    },
    levelArtist: {
      title: `Кто исполняет эту песню?`
    },
    levelGenre: {
      title: `Выберите инди-рок треки`,
      answers: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
      ],
    },
    resultSuccess: {
      title: `Вы настоящий меломан!`,
      stats: {
        time: 2,
        melodyCount: 4,
      },
      btnRepeat: `Сыграть ещё раз`,
      rating: 80,
    },
    resultFalse: {
      title: `Вы проиграли`,
      text: `Ничего, вам повезет в следующий раз`,
      btnRepeat: `Сыграть ещё раз`
    }
  },
  songs: [
    {
      name: `Пелагея`,
      imgSrc: `http://lorempixel.com/400/200`,
      value: 1,
      audioUrl: `audio/Rumba_Sabor.mp3`
    },
    {
      name: `Краснознаменная дивизия имени моей бабушки`,
      imgSrc: `http://lorempixel.com/300/200`,
      value: 2,
      audioUrl: `audio/Tango_Bango.mp3`
    },
    {
      name: `Lorde`,
      imgSrc: `http://lorempixel.com/200/200`,
      value: 3,
      audioUrl: `audio/Taking_a_Beating.mp3`
    }
  ],
  time: {
    startMinutes: `02`,
    startSeconds: `00`
  }
};
