import callApi from './apiCaller';

export const getCmsHomeSummaryRequest = data => {
  return callApi('/api/cms/home', 'GET', data);
};

export const getRelatedBookRequest = data => {
  return callApi('/api/books/' + data + '/relatedbooks', 'GET', null);
};

export const getReviewBookRequest = data => {
  return callApi('/api/reviews', 'GET', null);
};

export const getAllBookRequest = data => {
  return callApi('/api/books', 'GET', data);
};

export const getBookSuggestionRequest = data => {
  return callApi('/api/Search/Suggestion', 'GET', data);
};

export const addToCartRequest = (data, Token) => {
  return callApi('/api/basket', 'POST', data, Token);
};

export const getAllItemInCartRequest = (data, Token) => {
  return callApi('/api/basket/' + data, 'GET', null, Token);
};
export const getBestUserRequest = data => {
  return callApi('/api/cms/bestusers', 'GET', data);
};

export const getBestReviewRequest = data => {
  return callApi('/api/cms/reviews', 'GET', data);
};
