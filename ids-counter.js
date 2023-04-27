const delay = 700;
let requestNum = 0;
function sendRequest(fields) {
  requestNum++;
  setTimeout(() => {
    requestNum--;

    let request = new Request(fields.url, {
      method: fields.method || 'GET',
      cache: fields.cache ? 'default' : 'no-store'
    });

    fetch(request).then(response => {
      if (response.status === 200) {
        response[fields.dataType || 'text']().then(data => {
          fields.done(data);
        });
      } else {
        fields.fail(response);
      }
    })
    .catch(error => console.log(error));
  }, requestNum*delay);
}

// Возвращает промис, который должен вернуть JSON-объект с правками
async function getPage(page, resolve) {
  return new Promise(res => {
    resolve = resolve || res;
    sendRequest({
      url: `https://shikimori.me/Virous/versions/page/${page}.json`,
      cache: false,
      dataType: 'json',
      done: data => resolve(data),
      fail: error => {
        console.log(`Во время запроса страницы №${page} произошла ошибка`, error);
        getPage(page, resolve);
      }
    });
  });
}

// Возвращает промис, который должен вернуть количество правок
function getVersionsNum() {
  return new Promise(resolve => {
    sendRequest({
      url: 'https://shikimori.me/Virous',
      cache: false,
      done: data => {
        let body = new DOMParser().parseFromString(data, 'text/html').body;
        let versions = body.querySelector('[data-type="versions"] a').innerHTML;
        let versionsNum = parseInt( versions.match(/\d+/) );

        resolve(versionsNum);
      }
    });
  });
}

// Возвращает промис, который должен вернуть номер последней страницы
async function getLastPage(page) {
  return new Promise(async resolve => {
    while (true) {
      console.log(`Проверка страницы ${page}…`);
      let data = await getPage(page);
      if (!data.content) {
        resolve(page-1);
        break;
      }
      page++;
    }
  });
}

let ids = [];
async function countLinks(page) {
  return new Promise(async resolve => {
    let data = await getPage(page);
    console.log(`Запись тайтлов на странице ${page}…`, `Осталось запросов: ${requestNum}`);
    let versions = new DOMParser().parseFromString(data.content, 'text/html');
    let curr_ids = Array.from( versions.getElementsByClassName('external_links') )
    				.map(block => block.parentNode.parentNode.parentNode)
    				.filter( block => block.querySelector('.state.auto_accepted,.state.accepted') && block.querySelector('[data-text="Манга"]') )
    				.map( block => {
    					try {
    						return Number( block.querySelector('.id a').href.match(/\/mangas\/[a-z]{0,1}([0-9]{1,})-[0-9a-z\-]{0,}/)[1] ) 
    					} catch (error) {
    						console.log('Error!', error, block);
    					}
    				} );
    curr_ids.forEach(id => {
    	if ( ids.includes(id) ) return;
    	ids.push(id);
    });
    resolve();
  });
}

async function getVersionCounterReady() {
  console.log('Получение количества принятых правок…');
  let versionsNum = await getVersionsNum();
  console.log('Количество принятых правок:', versionsNum);
  console.log('Получение последней страницы…');
  let lastPage = await getLastPage( Math.ceil(versionsNum / 30) );
  console.log('Последняя страница правок:', lastPage);

  let requests = [];
  for (let i = 1; i <= lastPage; i++) {
    requests.push( countLinks(i) );
  }
  await Promise.all(requests);
  console.log(ids);
}

let btn = document.createElement('button');
btn.innerHTML = 'Посчитать';
btn.classList.add('u-helper-btn');
btn.addEventListener('click', getVersionCounterReady);
document.body.appendChild(btn);
