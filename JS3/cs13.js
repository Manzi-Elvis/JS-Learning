let userPrefs = {
  viewMode: "grid"
};
let { viewMode: displayMode, language = "English" } = userPrefs;
console.log(displayMode);
console.log(language);