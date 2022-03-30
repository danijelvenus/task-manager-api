const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})

// const me = new User({
//     name: 'Mike',  
//     password: 'sdgasgadg dfgdagsdf',
//     email: 'sDg@sdg.com'
// })
// me.save().then((result) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })


// const task = new Task({
//     description: "web api develop ",
    
// })

// task.save().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error)
// })