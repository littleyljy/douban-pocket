export default [
  {
    icon: '#icon-iconset0116',
    tabname: '图书',
    keyword: 'book',
    urlLink: '',
    apiItem: 'books',
    placeholder: '书名、作者、ISBN',
    api: 'https://api.douban.com/v2/book/search?tag=文学',
    searchapi: 'https://api.douban.com/v2/book/search?q='
  }, {
    icon: '#icon-dianyingyuan',
    tabname: '电影',
    keyword: 'movie',
    urlLink: 'movie',
    apiItem: 'subjects',
    placeholder: '电影、影人、影院、电视剧',
    api: 'https://api.douban.com/v2/movie/top250',
    searchapi: 'https://api.douban.com/v2/movie/search?q='
  }, {
    icon: '#icon-yinle',
    tabname: '音乐',
    keyword: 'music',
    urlLink: 'music',
    apiItem: 'musics',
    placeholder: '唱片名、表演者、条码、ISRC',
    api: 'https://api.douban.com/v2/music/search?tag=流行',
    searchapi: 'https://api.douban.com/v2/music/search?q='
  }
]
