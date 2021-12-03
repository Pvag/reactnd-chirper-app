import { applyMiddleware } from "redux";
// import logger from './logger';
import ReduxThunk from 'redux-thunk';

// export default applyMiddleware(ReduxThunk, logger);

export default applyMiddleware(ReduxThunk);