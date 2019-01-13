var courage2018= {
  chunk: function chunk(ary, size = 1) {
    var result = []
    for(var i = 0; i< ??; i++) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },
  compact: function(ary) {
    var result = []
    for(var item of ary) {
      if (item) {
        result.push(item)
      }
    }
    return result
  }
}


var courage2018 = function(){

  function chunk(ary, size = 1) {

  }
  function compact(ary) {

  }

  return {
    chunk: chunk,
    compact: compact,
  }
}

function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return[]
  }

  let index = 0
  let resIndex = 0
  const result = new array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size)) 
  }
  return result
}

export default chunk
