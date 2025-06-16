export const Resource = {
  url: {
    // authenticateUser: `/suppliers/signIn`,
    getAboutUs: `/aboutus`,
    postAboutUs: `/aboutus`,
    postEvents: `/event`,
    postTestimonial: `/testimonial`,
    postProductInfo: `/shop/product`,
    getProductDetails: `/shop/product/list`,
    // forgotPassword: `/suppliers/forgot/password`,
    postVideoInfo: `/video`,
    deleteProductDetails: (docId: string, fileKey: string) =>
      `/shop/product/delete?docId=${docId}&fileKey=${fileKey}`,
    getSchemeDetails: (clientId: string) =>
      `/gold-scheme/all-scheme?clientId=${clientId}`,
    getTestiMonialData: "/testimonial",
    getEventsData: `/event`,
    deleteTestimonial: (docId: string, fileKey: string) =>
      `/testimonial/delete?docId=${docId}&fileKey=${fileKey}`,
    deleteEvent: (docId: string, fileKey: string) =>
      `/event/delete?docId=${docId}&fileKey=${fileKey}`,
    getOrderLists: (userId: string | undefined) =>
      `/order-details/list?userId=${userId}`,
    updateOrderStatus: (orderId: string, status: string) =>
      `/order-details/update/status?orderId=${orderId}&status=${status}`,
    uppdateProduct: (productId: string) =>
      `/shop/product/update?productId=${productId}`,
    getProductById: (productId: string) => `/shop/product/${productId}`,
    addInvestmentManually: `/gold-scheme/add-scheme-manually`,
    getClientDetails: `/client`,
    updateTestimonial: (testimonialId: string) =>
      `/testimonial/update?testimonialId=${testimonialId}`,
    updateEvents: (eventId: string) => `/event/update?eventId=${eventId}`,
  },
};
