let model = require('./model')

let controller = {
  create(request, response) {
    model
      .create(request.body)
      .then(data => response.json(data))
      .catch(error => {
        console.error('Error on create()')
        response
          .status(500)
          .json({ error: 'Something went wrong' })
      })
  },

  getById(request, response) {
    model
      .findById(request.params.id)
      .then(data => response.json(data))
      .catch(error => {
        console.error('Error on getById()')
        response
          .status(500)
          .json({ error: 'Something went wrong' })
      })
  },

  getAll(request, response) {
    model
      .find()
      .then(data => response.json(data))
      .catch(error => {
        console.error('Error on getAll()')
        response
          .status(500)
          .json({ error: 'Something went wrong' })
      })
  },

  update(request, response) {
    model
      .findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(data => response.json(data))
      .catch(error => {
        console.error('Error on update()')
        response
          .status(500)
          .json({ error: 'Something went wrong' })
      })
  },

  delete(request, response) {
    model
      .findByIdAndRemove(request.params.id)
      .then(() => response.json({ success: true }))
      .catch(error => {
        console.error('Error on delete()')
        response
          .status(500)
          .json({ error: 'Somethin went wrong' })
      })
  },
}

module.exports = controller