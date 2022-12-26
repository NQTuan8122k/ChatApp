export const formatPhone = phone => {
  if (phone?.length == 10) {
    let phoneNew =
      phone?.slice(0, 4) + ' ' + phone?.slice(4, 7) + ' ' + phone?.slice(7);
    return phoneNew;
  } else {
    let phoneNew = phone?.replace(/\s+/g, '');
    return phoneNew;
  }
};
