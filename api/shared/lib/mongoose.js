import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird;

export default mongoose;