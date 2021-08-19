const fs = require('fs').promises

class Todos {
  constructor() {
    this.todos = []
  }

  list() {
    return [...this.todos]
  }

  add(title) {
    const todo = {
      title: title,
      completed: false
    }

    this.todos.push(todo)
  }

  complete(title) {
    if (this.todos.length === 0) {
      throw new Error('You have no TODOs stored. Why don\'t you add one first?');
    }

    let todoFound = false
    this.todos.forEach(todo => {
      if (todo.title === title) {
        todo.completed = true
        todoFound = true
        return
      }
    })

    if (!todoFound) {
      throw new Error(`Notodo was found with the title: ${title}`)
    }
  }

  // using fs with calbacks
  // saveToFile(callback) {
  //   let fileContents = 'Title,Completed\n'
  //   this.todos.forEach(({title, completed}) => {
  //     fileContents += `${title},${completed}\n`
  //   })

  //   fs.writeFile('todos.csv', fileContents, callback)
  // }

  saveToFile() {
    let fileContents = 'Title,Completed\n'
    this.todos.forEach(({title, completed}) => {
      fileContents += `${title},${completed}\n`
    })

    return fs.writeFile('todos.csv', fileContents)
  }
}

module.exports = Todos
