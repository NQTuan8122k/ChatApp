// import {END_POINTS} from '../../constants/api';
// import APIUtils from '../../utils/apiUtils';

// export const getAddressProvinceAPI = async () => {
//   const response = await APIUtils.get(END_POINTS.ADDRESS.GET_PROVINCE);
//   return response;
// };

// export const postAddressAPI = async object => {
//   const {
//     userId,
//     province,
//     district,
//     ward,
//     detail,
//     detailAddress,
//     isDefault,
//     fullName,
//     phoneNumber,
//   } = object;
//   const response = await APIUtils.post(`${END_POINTS.ADDRESS.POST_ADDRESS}`, {
//     body: JSON.stringify({
//       fullName: fullName,
//       phoneNumber: phoneNumber,
//       userId: userId,
//       province: province,
//       district: district,
//       ward: ward,
//       detail: detail,
//       detailAddress: detailAddress,
//       isDefault: isDefault,
//     }),
//   });
//   return response;
// };

// export const deleteAddressByIdAPI = async id => {
//   const response = await APIUtils.delete(
//     `${END_POINTS.ADDRESS.DELETE_ADDRESS_BY_ID}${id}`,
//   );
//   return response;
// };

// export const putAddressByIdAPI = async obj => {
//   const {id, edittedAddress} = obj;
//   const response = await APIUtils.put(
//     `${END_POINTS.ADDRESS.PUT_ADDRESS_BY_ID}${id}`,
//     {
//       body: JSON.stringify({...edittedAddress}),
//     },
//   );
//   return response;
// };

// export const getBannerSaleAPI = (pageSize = 5, pageNumber = 1) => {
//   return APIUtils.get(
//     `${END_POINTS.BANNER.BANNER_SALE}?PageNumber=${pageNumber}&PageSize=${pageSize}`,
//   );
// };

// export const getProductById = async productId => {
//   const res = await APIUtils.get(
//     END_POINTS.PRODUCT?.GET_BY_ID + `/${productId}`,
//   );
//   return res?.data;
// };

// export const getBestSeller = async () => {
//   const res = await APIUtils.get(END_POINTS.PRODUCT?.GET_BEST_SELLER);
//   return res?.data;
// };

// export const getRelatedProduct = async (payload = {}) => {
//   const res = await APIUtils.get(END_POINTS.PRODUCT?.GET_RELATED_PRODUCT, {
//     params: {
//       ...payload,
//     },
//   });
//   return res?.data;
// };

// export const addProductToCart = async (payload = {}) => {
//   const res = await APIUtils.post(END_POINTS.PRODUCT?.ADD_PRODUCT_TO_CART, {
//     body: JSON.stringify(payload),
//   });
//   return res?.data;
// };

// const getProductList = async (payload = {}) => {
//   const res = await APIUtils.get(END_POINTS.PRODUCT.GET_PRODUCT, {
//     params: payload,
//   });
//   return res.data;
// };

// export default {
//   getProductById,
//   getBestSeller,
//   getRelatedProduct,
//   getProductList,
//   addProductToCart,
// };
