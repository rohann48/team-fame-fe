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
  },
};
