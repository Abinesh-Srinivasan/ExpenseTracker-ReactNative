require("dotenv").config();

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
  };
};
