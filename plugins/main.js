import Vue from 'vue'

Vue.filter('toEURO', function(value) {
  return `€${value}`
})

Vue.filter('Upper', function(value) {
  return value.toUpperCase()
})

Vue.filter('Lower', function(value) {
  return value.toLowerCase()
})

Vue.filter('readMore', function(text, length, suffix) {
  return text.substring(0, length) + suffix
})

Vue.filter('toFixed', function(price, limit) {
  return price.toFixed(limit)
})

Vue.filter('json', function(value) {
  return JSON.stringify(value)
})

Vue.filter('pluck', function(objects, key) {
  return objects.map(function(object) {
    return object[key]
  })
})

Vue.filter('min', function(values) {
  return Math.min(...values)
})

Vue.filter('max', function(values) {
  return Math.max(...values)
})

Vue.filter('first', function(values) {
  if (Array.isArray(values)) {
    return values[0]
  }
  return values
})

Vue.filter('last', function(values) {
  if (Array.isArray(values)) {
    return values[values.length - 1]
  }
  return values
})

Vue.filter('without', function(values, exclude) {
  return values.filter(function(element) {
    return !exclude.includes(element)
  })
})

Vue.filter('unique', function(values, unique) {
  return values.filter(function(element, index, self) {
    return index === self.indexOf(element)
  })
})

Vue.filter('prepend', function(string, prepend) {
  return `${string}${prepend}`
})

Vue.filter('repeat', function(string, times) {
  return string.repeat(times)
})
