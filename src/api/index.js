export const fetchData = () =>
  fetch('http://hn.algolia.com/api/v1/search?query=redux');

//   export const fetchData = (action, type) => async () => {
//     const result = await fetch('http://hn.algolia.com/api/v1/search?query=redux');

//     if (action) {
//       action({ type, payload: result });
//     }
//   };
