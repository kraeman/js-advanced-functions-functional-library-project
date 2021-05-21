const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === "array") {
        collection.forEach(element => callback(element, collection.indexOf(element), collection))
      } else {
        for (const key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let col = []
      if (typeof collection === "array") {  
        collection.forEach(element => col.push(callback(element, collection.indexOf(element), collection)))
      } else {
        for (const key in collection) {
          col.push(callback(collection[key], key, collection))
        }
      }
      return col
    },

    reduce: function(collection, callback, acc) {
      console.log(acc)
      console.log(collection)
      console.log(callback(2))
      const initial = acc
      let i
      if (acc != null) {
        for (i = 0; i < collection.length; i++) {
          acc = callback(initial, collection[i], collection)
        }
      } else {
        for (i = 0; i < collection.length; i++) {
          acc = callback(0, collection[i], collection)
        }
      }
      return acc
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
