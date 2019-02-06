module.exports = {
  "extends": "airbnb",
  "rules": {
    "func-names": ["error", "never"],
    "no-param-reassign": 0,
    "no-unused-expressions": [2, { allowTernary: true }],
  },
  "env": {
    "browser": true,
  }
};