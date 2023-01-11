export const formatPhone = text => {
  let phone = text?.replace(/\s+/g, '');
  if (phone?.length == 10) {
    let phoneNew =
      phone?.slice(0, 4) + ' ' + phone?.slice(4, 7) + ' ' + phone?.slice(7);
    return phoneNew;
  } else if (phone?.length <= 3) {
    let phoneNew = phone?.replace(/\s+/g, '');
    return phoneNew;
  } else if (phone?.length <= 6) {
    let phoneNew = phone?.slice(0, 3) + ' ' + phone?.slice(3, 6);
    return phoneNew;
  } else if (phone?.length <= 9) {
    let phoneNew =
      phone?.slice(0, 3) + ' ' + phone?.slice(3, 6) + ' ' + phone?.slice(6);
    return phoneNew;
  } else {
    let phoneNew = phone?.replace(/\s+/g, '');
    return phoneNew;
  }
};
