const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const dishRoutes = require('./routes/dishes')
const ingredientsRoutes = require('./routes/ingredients')
const editRoutes = require('./routes/edit')
const path = require('path');

require('dotenv').config({path: './config/.env'})
app.use(cors())
// Passport config
require('./config/passport')(passport)

connectDB()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/dishes', dishRoutes)
app.use('/ingredients', ingredientsRoutes)
app.use('/edit', editRoutes)
 
app.listen(process.env.PORT, () => {
    console.log(`Bruuuh, Express server is running, check PORT ${process.env.PORT}!`)
})    