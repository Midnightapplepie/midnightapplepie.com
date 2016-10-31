import { combineReducers } from 'redux';
import blogPreviewImages from './reducer_blog_preview_images';

const allReducers = combineReducers({
	blogPreviewImages: blogPreviewImages
})

export default allReducers;