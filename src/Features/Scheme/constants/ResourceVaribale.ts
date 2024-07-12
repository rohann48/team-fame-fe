export const Resource = {
  url: {
    getGoldRate: () => `/get-gold-rate`,
    joinScheme: `/gold-scheme`,
    fetchGoldSchemeUserInfo: (userId: string | null) =>
      `/gold-scheme/scheme/${userId}`,
    postInvestment: (schemeId: string | null) =>
      `/gold-scheme/investment/${schemeId}`,
  },
};
