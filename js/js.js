/**
 * Сёдзё-ай																							73												18+		682
 * Юри																									75												18+		464
 * 
 * Романтика, Комедия, Повседневность										62,49,54,!73,!75								487
 * Романтика, Повседневность, !Комедия									62,54,!49,!73,!75								538
 * Романтика, Комедия, Сёдзё, !Повседневность						62,49,63,!54,!73,!75						936
 * Романтика, Комедия, Школа, !Сёдзё, !Повседневность		62,49,60,!63,!54,!73,!75				733
 * 
 * Гарем																								71															508
 * Триллер																							81															244
 * Полиция																							89															214
 * Пародия																							86															228
 * Вампиры																							64															205
 * Игры																									79															259
 * Музыка																								78															289
 * Супер сила																						82															329
 * Демоны																								72															356
 * Военное																							70															425
 * Меха																									83															357
 * Боевые искусства																			66															447
 * Смена пола																						74															476
 * Спорт																								76															775
 * Психологическое																			67															729
 * 
 * Романтика, Комедия, !Школа, !Сёдзё, !Повседневность	62,49,!60,!63,!54,!73,!75
 * Романтика, Школа, Сёдзё, !Комедия, !Повседневность		62,60,63,!49,!54,!73,!75
 * Романтика, Школа, !Комедия, !Повседневность, !Сёдзё	62,60,!49,!54,!63,!73,!75
 * 
 * Романтика, Сёдзё, !Комедия, !Повседневность, !Школа	62,63,!49,!54,!60,!73,!75
 */
console.log(blist);
console.log(manga);

let mangaList = [];
$.each(manga, function(i) {
	if (blist.indexOf(this.id) === -1 && this.links.indexOf('myanimelist') !== -1) {
		mangaList.push(this);
	}
});

mangaList.sort((a, b) => {
	if (a.last_change > b.last_change) return 1;
	if (a.last_change < b.last_change) return -1;
	return 0;
});
console.log(mangaList);



function openNewTab(btn, url) {
	$('.selected').removeClass('selected');
	$(btn).closest('.title').addClass('selected');
	$('.remaining').html(`Осталось тайтлов: ${$(btn).closest('.title').nextAll('.title').length}`);
	window.open(`https://shikimori.one${url}#startSearch`);
}

let kinds = ['readmanga', 'mangalib', 'mangadex', 'mangaupdates'];
let $body = $('body');
let sum = 0;
$.each(mangaList, function (i, title) {
	let flag = false;
	$.each(kinds, (j, kind) => {
		if (title.links.indexOf(kind) === -1) {
			flag = true;
		}
	});

<<<<<<< HEAD
	if (i > 0 && flag) {
=======
	if (i > 711 && flag) {
>>>>>>> 0936c9ad3354b5371a02afadadffc60768325d15
		sum++;
		title.name = encodeURIComponent(title.name);
		if (title.japanese) title.japanese = encodeURIComponent(title.japanese[0]);

		$body.append($('<div>', {
			class: 'title  flex',
			append: $('<div>', {
				html: i,
				css: {
					width: '27px',
					display: 'inline-block',
					marginRight: '10px',
					userSelect: 'none',
					textAlign: 'right',
					verticalAlign: 'middle'
				}
			})
			.add($('<a>', {
				html: decodeURIComponent(title.name),
				href: `https://shikimori.one${title.url}`,
				target: '_blank',
				click: function() {
					$('.selected').removeClass('selected');
					$(this).closest('.title').addClass('selected');
				},
				css: {
					display: 'inline-block',
					width: 'calc(100% - 107px)',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					verticalAlign: 'middle'
				}
			}))
			.add($('<button>', {
				html: 'Start',
				click: function() {openNewTab(this, title.url)},
				css: {
					width: '60px',
					'font-size': '12px',
					'line-height': 1,
					userSelect: 'none',
					marginLeft: '10px',
					float: 'right'
				}
			})),
			css: {
				width: '500px',
				padding: '3.98px 8px',
				alignItems: 'center'
			}
		}));
	}
});

$body.append($('<div>', {
	class: 'remaining',
	html: `Осталось тайтлов: ${sum}`,
	css: {
		position: 'fixed',
		top: '10px',
		right: '20px',
		backgroundColor: '#292929',
		padding: '10px',
		boxShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)',
		borderRadius: '4px'
	}
}));

$body.append($('<button>', {
	html: `Обновить ЧС`,
	click: () => {
		$.each(manga, function(i) {
			if (blist.indexOf(this.id) === -1) {
				blist.push(this.id);
			}
		});

		blist.sort((a,b)=>{
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
		console.log(JSON.stringify(blist));
	},
	css: {
		position: 'fixed',
		top: '59px',
		right: '20px',
		fontSize: '12px'
	}
}));
