const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones

    return Recipe.deleteMany();
  })
  .then(() => {
    //Iteration 2
    // return Recipe.create({
    //   title: 'Bolognesa',
    //   level: 'Amateur Chef',
    //   ingredients: ['meat', 'oregano', 'tomato'],
    //   cuisine: 'italian',
    //   dishType: 'main_course',
    //   duration: 45,
    //   creator: 'Genaro'
    // });
    // iteration 3
    return Recipe.insertMany(data);
  })
  .then(() => {
    // Iteration 4

    // return Recipe.findOneAndUpdate(
    //   { title: { $regex: 'Rigatoni alla Genovese' } },
    //   { duration: 100 },
    //   { new: true }
    // );

    //Iteration 5
    return Recipe.deleteOne({ title: { $regex: 'Carrot Cake' } });
  })
  .then(() => {
    // Iteration 2
    // console.log('Addded correctly: ', recipe.title);

    // iteration 3
    // for (recipe of recipes) {
    //   console.log('Added: ', recipe.title);
    // }
    //Iteration 4
    // console.log('The recipe ', recipe, ' was updated successfully');
    //Iteration 5
    console.log('Removed successfully!');
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('The connection has been destroyed');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
