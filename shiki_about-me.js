function spacesOfNum(number) {
  number = number.toString();
  if ( number.length > 4 ) {
    number = number.replaceAll(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return number;  
}

function declOfNum(number, titles) {  
  let cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

let data = {
  checked: [
    {genres: 'Сёдзё-ай', ids: '73', censorship: '✕', num: 682},
    {genres: 'Юри', ids: '75', censorship: '✕', num: 464},
    {genres: 'Романтика, Комедия, Повседневность', ids: '62,49,54', censorship: '✓', num: 487},
    {genres: 'Романтика, Повседневность, [span=nobr]!Комедия[/span]', ids: '62,54,!49', censorship: '✓', num: 538},
    {genres: 'Романтика, Комедия, Сёдзё, [span=nobr]!Повседневность[/span]', ids: '62,49,63,!54', censorship: '✓', num: 936},
    {genres: 'Романтика, Комедия, Школа, [span=nobr]!Сёдзё[/span], [span=nobr]!Повседневность[/span]', ids: '62,49,60,!63,!54', censorship: '✓', num: 733},
    {genres: 'Гарем', ids: '71', censorship: '✓', num: 508},
    {genres: 'Триллер', ids: '81', censorship: '✓', num: 244},
    {genres: 'Полиция', ids: '89', censorship: '✓', num: 214},
    {genres: 'Пародия', ids: '86', censorship: '✓', num: 228},
    {genres: 'Вампиры', ids: '64', censorship: '✓', num: 205},
    {genres: 'Игры', ids: '79', censorship: '✓', num: 259},
    {genres: 'Музыка', ids: '78', censorship: '✓', num: 289},
    {genres: 'Супер сила', ids: '82', censorship: '✓', num: 329},
    {genres: 'Демоны', ids: '72', censorship: '✓', num: 356},
    {genres: 'Военное', ids: '70', censorship: '✓', num: 425},
    {genres: 'Меха', ids: '83', censorship: '✓', num: 357},
    {genres: 'Боевые искусства', ids: '66', censorship: '✓', num: 447},
    {genres: 'Смена пола', ids: '74', censorship: '✓', num: 476},
    {genres: 'Спорт', ids: '76', censorship: '✓', num: 775},
    {genres: 'Психологическое', ids: '67', censorship: '✓', num: 729},
    {genres: 'Ужасы', ids: '80', censorship: '✓', num: 0}
  ],
  details: {
    values: [18705, 2590, 46, 21341],
    titles: [
      ["Добавленная ссылка", "Добавленные ссылки", "Добавленных ссылок"],
      ["Исправленная ссылка", "Исправленые ссылки", "Исправленых ссылок"],
      ["Удалённая ссылка", "Удалённые ссылки", "Удалённых ссылок"],
      ["Всего", "Всего", "Всего"]
    ]
  },
  updateDate: '6 мая 2022'
};



let str = `
[div=u-styleless]
  [spoiler=Для корректного отображения таблиц и прочего нужно включить пользовательские стили]

    [div=use-tabs --dark --tabline]
      [div=active to-process data-dynamic=switcher data-switcher=tab1]Нет на Shikimori[/div]
      [div=to-process data-dynamic=switcher data-switcher=tab1]Подробности правок[/div]
      [div=to-process data-dynamic=switcher data-switcher=tab1]Осмотренные тайтлы[/div]
      [span=user-defined u-checkbox][span=u-checkbox-icon]sticky_note_2[/span][span=u-checkbox-title]Показывать примечания[/span][/span]

      [div=CUSTOM_PANELS_CONTAINER]
        [div=CUSTOM_PANEL]
          [div=u-table u-missing-titles b-table list-lines]
            [div=u-thead]
              [div=u-tr]
                [span=u-th index]#[/span]
                [span=u-th name order-control]Название[/span]
                [span=u-th num order-control active]Оценка[/span]
                [span=u-th num order-control]Главы[/span]
                [span=u-th num order-control]Тип[/span]
              [/div]
              [div=u-tr border]
                [div=u-th][/div]
                [div=u-th][/div]
                [div=u-th][/div]
                [div=u-th][/div]
                [div=u-th][/div]
              [/div]
            [/div]
            [div=u-tbody entries]
              [div=u-tr user_rate selectable]
                [span=u-td index][span]1[/span][/span]
                [span=u-td name][url=https://mangadex.org/title/33956/girlfriends-for-3-seconds]Возлюбленные на 30 секунд[/url][/span]
                [span=u-td num][span]8[/span][/span]
                [span=u-td num][span]2[/span][span][span=b-separator inline]/[/span]2[/span][/span]
                [span=u-td num]Манга[/span]
              [/div]
              [div=u-tr user_rate selectable]
                [span=u-td index][span]2[/span][/span]
                [span=u-td name][url=https://mangadex.org/title/37839/rainbow]Радуга[/url][/span]
                [span=u-td num][span]8[/span][/span]
                [span=u-td num][span]1[/span][span][span=b-separator inline]/[/span]1[/span][/span]
                [span=u-td num]Ваншот[/span]
              [/div]
              [div=u-tr user_rate selectable]
                [span=u-td index]3[/span]
                [span=u-td name][url=https://www.mangaupdates.com/series.html?id=166461]Hokenshitsu Sensei to Mususuki-chan[/url][/span]
                [span=u-td num][span]7[/span][/span]
                [span=u-td num][span]1[/span][span][span=b-separator inline]/[/span]1[/span][/span]
                [span=u-td num]Ваншот[/span]
              [/div]
              [div=u-tr user_rate selectable]
                [span=u-td index]4[/span]
                [span=u-td name][url=https://www.mangaupdates.com/series.html?id=162906]Робкая Такасэ снова ждёт её сегодня[/url][span=rewatches]5 повторных прочтений[/span][/span]
                [span=u-td num][span]7[/span][/span]
                [span=u-td num][span]3[/span][span][span=b-separator inline]/[/span]3[/span][/span]
                [span=u-td num]Манга[/span]
              [/div]
              [div=u-tr user_rate selectable]
                [span=u-td index]5[/span]
                [span=u-td name][url=https://www.mangaupdates.com/series.html?id=170324]Твоё тепло[/url][/span]
                [span=u-td num][span]7[/span][/span]
                [span=u-td num][span]1[/span][span][span=b-separator inline]/[/span]1[/span][/span]
                [span=u-td num]Ваншот[/span]
              [/div]
            [/div]
          [/div]
        [/div]



        [div=CUSTOM_PANEL]
          [div=show-on-checked u-note]
            [quote=Virous]
              [s]Из-за моей лени алгоритм подсчёта пока не учитывает некоторые моменты, поэтому эти числа немного, но отличаются от действительных[/s]
            [/quote]
          [/div]
          [div=u-details u-details-links]

            ${data.details.values.map((v, i) => `
              [span]
                [div=u-details-value]${spacesOfNum(v)}[/div]
                [div=u-details-title]${declOfNum(v, data.details.titles[i])}[/div]
              [/span]
            `).join('')}
            
          [/div]
          [div=b-replies]Дата обновления: ${data.updateDate}[/div]
        [/div]



        [div=CUSTOM_PANEL]
          [div=show-on-checked u-note]
            [quote=Virous]
              Список с количеством тайтлов, которые я посетил с целью добавления ссылок[br][br]

              В него не всегда входят произведения, которые:
              [list]
                [*]Являются ваншотами, потому что я их пока что стараюсь обходить стороной
                [*]Были отредактированы спонтанно и не принадлежат жанру, который я тогда активно редактировал
                [*]Были добавлены в базу и отредактированы уже после закрытия жанра
              [/list][br]

              Стоит отметить, что каждая последующая строка таблицы исключает не только перечисленные в ней жанры, но и все [u]полностью[/u] закрытые жанры из предыдущих строк. Таким образом, обе нижеприведённые таблицы подразумевают одни и те же списки произведений
              [div=cc-2 m0]
                [div=c-column]
                  [div=u-custom-table u-checked-titles]
                    [div=u-table]
                      [div=u-tbody]
                        [div=u-tr]
                          [span=u-td index]1[/span]
                          [span=u-td]Демоны[/span]
                        [/div]
                        [div=u-tr]
                          [span=u-td index]2[/span]
                          [span=u-td]Вампиры[/span]
                        [/div]
                        [div=u-tr]
                          [span=u-td index]3[/span]
                          [span=u-td]Военное, !Полиция[/span]
                        [/div]
                        [div=u-tr]
                          [span=u-td index]4[/span]
                          [span=u-td]Военное, Полиция[/span]
                        [/div]
                        [div=u-tr]
                          [span=u-td index]5[/span]
                          [span=u-td]Меха[/span]
                        [/div]
                      [/div]
                    [/div]
                  [/div]
                [/div]
                [div=c-column]
                  [div=u-custom-table u-checked-titles]
                    [div=u-table]
                      [div=u-tbody]
                        [div=u-tr]
                          [span=u-td index]1[/span]
                          [span=u-td]Демоны[/span]
                        [/div]
                        [div=u-tr]
                          [span=u-td index]2[/span]
                          [span=u-td]Вампиры, !Демоны[/span]
                        [/div]
                        [div=u-tr]
                          [span=u-td index]3[/span]
                          [span=u-td]Военное, !Полиция, !Демоны, !Вампиры[/span]
                        [/div]
                        [div=u-tr]
                          [span=u-td index]4[/span]
                          [span=u-td]Военное, Полиция, !Демоны, !Вампиры[/span]
                        [/div]
                        [div=u-tr]
                          [span=u-td index]5[/span]
                          [span=u-td]Меха, !Демоны, !Вампиры, !Военное[/span]
                        [/div]
                      [/div]
                    [/div]
                  [/div]
                [/div]
              [/div]
            [/quote]
          [/div]
          [div=u-custom-table]
            [div=u-table u-checked-titles]
              [div=u-thead]
                [div=u-tr]
                  [span=u-th]№[/span]
                  [span=u-th]Жанры[/span]
                  [span=u-th]IDs[/span]
                  [span=u-th tc]Цензура[/span]
                  [span=u-th tr][span=nobr]Кол-во[/span][/span]
                [/div]
              [/div]
              [div=u-tbody]

                ${data.checked.map((v, i) => `
                  [div=u-tr]
                    [span=u-td index]${i+1}[/span]
                    [span=u-td]${v.genres}[/span]
                    [span=u-td]${v.ids}[/span]
                    [span=u-td tc]${v.censorship}[/span]
                    [span=u-td tr]${v.num}[/span]
                  [/div]
                `).join('')}

                [div=u-tr]
                  [span=u-td index][/span]
                  [span=u-td][b]Всего[/b][/span]
                  [span=u-td][/span]
                  [span=u-td][/span]
                  [span=u-td tr][b]${data.checked.reduce((prev, curr) => {return {num: prev.num + curr.num}}).num}[/b][/span]
                [/div]
              [/div]
            [/div]
          [/div]
        [/div]
      [/div]

    [/div]

  [/spoiler]
[/div]
`;

console.log( str.replaceAll('  ', '').replaceAll('\n', '') );
// console.log( str );