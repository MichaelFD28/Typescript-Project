const edamamConfig = {
  ID: "c94a45d4",
  Key: "fb7f13ccb3628a3eaddf86084dac4498",
};
const config = {
  recipeAPIBaseUrl: `https://api.edamam.com/api/recipes/v2?type=public&app_id=${edamamConfig.ID}&app_key=${edamamConfig.Key}`,
};

export default config;
