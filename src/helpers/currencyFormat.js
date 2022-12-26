const currencyFormat = num => {
  if (!!num) {
    return num?.toFixed(0)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ₫';
  } else {
    return '0 ₫';
  }
};
export default currencyFormat;
