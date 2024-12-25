export const env = {
  instagram: {
    accessToken: import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN,
    enabled: Boolean(import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN),
  },
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};