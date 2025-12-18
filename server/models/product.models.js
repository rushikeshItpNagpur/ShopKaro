const mongoose = require('mongoose');


// title
// price
// description
// image url
// category
// rating
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default:"description not available" 
    },
    image: {
      type: String,
      required: true,  
    },
    category:{
        type:String,
        required: true

    },
    rating:{
       type:Number,
       default:"3.5"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Products', productSchema);
