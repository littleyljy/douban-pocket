/**
* API 数据格式统一化
* @param {String} type 列表页传入books/subjects/musics，详情页传入book/movie/music
* @param {Object} data
*/
let dataFormat = (type, data) => {
  console.log('dataFormat', data)
  if (data.books && type === 'books') {
    // book 列表页
    return data.books.map(item => {
      return {
        id: item.id,
        title: item.title,
        rating: item.rating,
        average: item.rating.average,
        name: item.author.map(item => { return item + ' ' }),
        pubdate: item.pubdate,
        image: item.images.small,
        tags: item.tags.splice(0, 3),
        summary: item.summary
      }
    })
  } else if (data.subjects && type === 'subjects') {
    // movie 列表页
    return data.subjects.map(item => {
      return {
        id: item.id,
        title: item.title,
        rating: item.rating,
        average: item.rating.average.toFixed(1),
        name: item.directors.map(item => { return item.name + ' ' }),
        pubdate: item.year,
        image: item.images.small,
        tags: item.casts
      }
    })
  } else if (data.musics && type === 'musics') {
    // music 列表页
    return data.musics.map(item => {
      return {
        id: item.id,
        title: item.title,
        rating: item.rating,
        average: item.rating.average,
        name: item.attrs.singer,
        pubdate: item.attrs.pubdate,
        image: item.image,
        tags: item.tags.splice(0, 3),
        summary: item.summary
      }
    })
  } else if (type === 'book') {
    // book 详情页
    return {
      title: data.title,
      rating: data.rating,
      average: data.rating.average,
      name: data.author,
      pubdate: data.pubdate,
      image: data.images.small,
      tags: data.tags,
      summary: data.summary,
      numRaters: data.rating.numRaters,
      publisher: data.publisher,
      binding: data.binding,
      pages: data.pages + '页',
      price: data.price,
      nameintro: data.author_intro
    }
  } else if (type === 'movie') {
    // movie 详情页
    return {
      title: data.alt_title,
      rating: data.rating,
      average: data.rating.average,
      name: data.author.map(item => { return item.name + ' ' }),
      pubdate: data.attrs.pubdate,
      image: data.image,
      tags: data.tags,
      summary: data.summary,
      numRaters: data.rating.numRaters,
      publisher: data.attrs.country,
      binding: data.attrs.language,
      pages: data.attrs.movie_duration,
      price: data.title
    }
  } else if (type === 'music') {
    // music 详情页
    return {
      title: data.title,
      rating: data.rating,
      average: data.rating.average,
      name: data.attrs.singer,
      pubdate: data.attrs.pubdate,
      image: data.image,
      tags: data.tags,
      summary: data.attrs.tracks,
      numRaters: data.rating.numRaters,
      publisher: data.attrs.publisher,
      binding: data.attrs.media,
      pages: data.alt_title,
      price: data.attrs.version
    }
  } else {
    console.log('dataFormat no data')
  }
}

export default dataFormat
