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

    reduce: function(collection, callback, start) {
      let acc
      let index

      if (start) {
        acc = start
        index = 0
      } else {
        acc = collection[0]
        index = 1
      }
      for (let i = index; i < collection.length; i++) {
        acc = callback(acc, collection[i])
        console.log(acc)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let finalArray = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          finalArray.push(collection[i])
        }
      }
      return finalArray
    },


    size: function(collection) {
      var counter = 0
      for (let i = 0; i < collection.length; i++) {
        counter = counter + 1
      }
      return counter
    },


  }
})()

fi.libraryMethod()
