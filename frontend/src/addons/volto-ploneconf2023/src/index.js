const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['en'],
    defaultLanguage: 'en',
    openExternalLinkInNewTab: true,
  };
  return config;
};

export default applyConfig;
