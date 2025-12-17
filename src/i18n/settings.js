const defaultNS = "common";
const fallbackLng = "en";
const locales = [fallbackLng, "bg"];

function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

module.exports = {
  defaultNS,
  fallbackLng,
  locales,
  getOptions,
};
