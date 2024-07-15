export const Resource = {
  url: {
    // authenticateUser: `/suppliers/signIn`,
    getAboutUs: `/aboutus`,
    getEvents: `/event`,
    getTestimonials: "/testimonial",
    registerUser: "/client/sign-up",
    authenticateUser: "/client/auth",
    getProductDetails: `/shop/product/list`,
    logoutUser: "/client/auth/logout",
    userCheck: "/client/auth/check",
    getRefferalCodeList: "/shop/offer-code/list",
    validateRefferalCode: "/shop/offer-code/validate/code",
    // forgotPassword: `/suppliers/forgot/password`,
    getEventAndNewsDetails: (id: string | null) => `/event/${id}`,
    getVideoById: (videoId: string | null) => `/video/${videoId}`,
    getAllVideos: `/video/list`,
    getCartDataByClientId: (clientId: string | null) =>
      `/cart/list/client?clientId=${clientId}`,
    updateProdQuantity: (clientId: string | null) =>
      `/cart/product/quantity?clientId=${clientId}`,
    removeProdFromCart: (clientId: string | null, productId: string | null) =>
      `/cart/product/cart?clientId=${clientId}&productId=${productId}`,
    EditUsers: (clientId: string) => `/client/${clientId}`,
    getUserInfo: (clientId: string) => `/client/clientId?clientId=${clientId}`,
  },
};
