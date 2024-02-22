import mongoose from "mongoose";
const URI="mongodb+srv://fernandoibarra89:Coderbackend2024@cluster0.bwoxm59.mongodb.net/"
 

const connectToDB = () => {
    try {
        mongoose.connect(URI)
        console.log('Conectado a MongoDB ✨')
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB