const initial_value = 172;

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
