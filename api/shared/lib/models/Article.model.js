import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

// Need to import the .model for refs
import './Category.model';

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: false,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

ArticleSchema.plugin(timestamps);

export default mongoose.model('Article', ArticleSchema);