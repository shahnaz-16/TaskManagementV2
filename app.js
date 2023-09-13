const express = require('express')

const { sequelize, User, Task } = require('./models')

const app = express()
app.use(express.json())

app.listen({ port: 5000 }, async () => {
    console.log('Server up on http://localhost:5000')
    //await sequelize.sync({force: true})
    await sequelize.authenticate()
    console.log('Database Connected!')
  })

  app.post('/users', async (req, res) => {
    const { name, email, role } = req.body
  
    try {
      const user = await User.create({ name, email, role })
  
      return res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })

  app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll()
  
      return res.json(users)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  app.get('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
      const user = await User.findOne({
        where: { uuid },
        include: 'posts',
      })
  
      return res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  
  app.delete('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
      const user = await User.findOne({ where: { uuid } })
  
      await user.destroy()
  
      return res.json({ message: 'User deleted!' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  
  app.put('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    const { name, email, role } = req.body
    try {
      const user = await User.findOne({ where: { uuid } })
  
      user.name = name
      user.email = email
      user.role = role
  
      await user.save()
  
      return res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  app.post('/tasks', async (req, res) => {
    const { userUuid, name, priority, category, dueDate } = req.body
  
    try {
      const user = await User.findOne({ where: { uuid: userUuid } })
  
      const task = await Task.create({userId: user.id , name: name, priority: priority, category: category, dueDate: dueDate})
  
      return res.json(task)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })

  app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.findAll({ include: 'user' ,
      order: [
        ['dueDate', 'DESC'],
    ]})
  
      return res.json(tasks)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })

  app.get('/tasks/search', async (req, res)  => {
    const match = {}

    const filters = req.query;
    const tasks = await Task.findAll({ include: 'user' })

    const filteredTasks = tasks.filter(task => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredTasks);
  });