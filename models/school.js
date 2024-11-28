const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,name ]
  },
  departments{
    name:String,
    required:[true,name ]
  },
})
























const mongoose = require("mongoose");
const slugify = require("slugify")
const tourSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,'tour must contain name'],
    unique:true
  },
  slug:String,
  isSecret:{
    type:Boolean,
    default:false
  }
  ,
  duration:{
    type:Number,
    required:[true,'tour must have duration']
  },
  maxGroupSize:{
    type:Number,
    required:[true,'tour must have group size']
  },
  difficulty:{
    type:String,
    required:[true,'tour must have type of difficulty'],
  },
  priceDiscount:Number,
  summary:{
    type:String,
    trim:true,
    required:[true,'tour must have summary']
  }
  ,
  ratingsAverage:{
    type:Number,
    default:4.5
  },
  ratingsQuantity:{
    type:Number,
    default:0
  },
  price:{
    type:Number,
    required:[true,'tour price is required']
  },
  discountPrice:{
    type:Number,
    validate:{
     validator: function(value){
      return  value < this.price;
    },
     message:'Discount price {VALUE} should be less than price'
  }
   
  },
  description:{
    type:String,
    trim:true
  },
  imageCover:{
    type:String,
     required:[true,"tour must have the cover image"]
  },
  images:[String],
  createdAt:{
    type:Date,
    default:Date.now()
  },
  startDates:[Date],
 
}, {
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
})
tourSchema.virtual("durationWeeks").get(function(){
  return this.duration/7;
}
)
//document middleware only runs on save() and create() 
tourSchema.pre("save",function(next){
this.slug= slugify(this.name,{lower:true})
next();
})

tourSchema.pre(/^find/,function(next){
  this.find({isSecret:{$ne:true}})
  next();
})
tourSchema.post("save",function(doc,next){
next();
})

tourSchema.pre("aggregate",function(next){
this.pipeline().unshift({$match:{isSecret:{$ne:true}}})
  next();
})

//tourSchema.post
const Tour = new mongoose.model("Tour",tourSchema);

module.exports=Tour