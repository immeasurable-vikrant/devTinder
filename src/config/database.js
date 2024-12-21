const { mongoose } = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://vikrantimmeasurable:vaCBo8G6vXuUo6fI@cluster0-devtinder.twjty.mongodb.net/devtinder")
}

module.exports = connectDB