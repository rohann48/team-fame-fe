export const Resource = {
  url: {
    getProductDetails: (productId: string | undefined) =>
      `/shop/product/${productId}`,
    addToCart: `/cart`,
  },
};
