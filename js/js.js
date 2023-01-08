const initial_value = 142;

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
 * Хоррор																								80															807
 * Детектив																							46															888
 * Исторический																					69															691
 * Фантастика																						53															1104
 * 
 * Романтика, Комедия, !Школа, !Сёдзё, !Повседневность	62,49,!60,!63,!54,!73,!75
 * Романтика, Школа, Сёдзё, !Комедия, !Повседневность		62,60,63,!49,!54,!73,!75
 * Романтика, Школа, !Комедия, !Повседневность, !Сёдзё	62,60,!49,!54,!63,!73,!75
 * 
 * Романтика, Сёдзё, !Комедия, !Повседневность, !Школа	62,63,!49,!54,!60,!73,!75
 */
console.log(blist);
console.log(manga);

let mangaList = manga.filter(title => {
	if ( blist.includes(title.id) ) return false;
	if ( !title.links.includes('myanimelist') ) return false;
	return true;
});

mangaList.sort( (a, b) => a.last_change - b.last_change );
console.log(mangaList);



function openNewTab(btn, url) {
	$('.selected').removeClass('selected');
	$(btn).closest('.title').addClass('selected');
	$('.remaining').html(`Осталось тайтлов: ${$(btn).closest('.title').nextAll('.title').length}`);
	window.open(`https://shikimori.one${url}#startSearch`);
}

let $body = $('body');
function addNewTitle(title, index) {
	$body.append($('<div>', {
		class: 'title  flex',
		append: $('<div>', {
			class: 'index',
			html: index
		})
		.add($('<a>', {
			html: decodeURIComponent(title.name),
			class: 'link',
			href: `https://shikimori.one${title.url}`,
			target: '_blank',
			click: function() {
				$('.selected').removeClass('selected');
				$(this).closest('.title').addClass('selected');
			}
		}))
		.add($('<button>', {
			html: 'Start',
			class: 'btn',
			click: function() {openNewTab(this, title.url)}
		}))
	}));
}


let kinds = ['readmanga', 'mangalib', 'remanga', 'mangaupdates', 'mangadex', 'mangafox', 'mangahub'];
let sum = 0;
for (let i = 0; i < mangaList.length; i++) {
	let title = mangaList[i];

	let has_all_important_kinds = true;
	for (let j = kinds.length; --j;) {
		if ( title.links.includes(kinds[j]) ) continue;
		has_all_important_kinds = false;
		break;
	}

	if (i <= initial_value || has_all_important_kinds) continue;

	sum++;
	title.name = encodeURIComponent(title.name);
	if (title.japanese) title.japanese = encodeURIComponent(title.japanese[0]);
	addNewTitle(title, i);
};

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
		console.log( JSON.stringify(blist) );
	},
	css: {
		position: 'fixed',
		top: '59px',
		right: '20px',
		fontSize: '12px'
	}
}));
