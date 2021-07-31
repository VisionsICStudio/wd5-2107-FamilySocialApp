const stylelint = require('stylelint');
const stylelintOrderPropertiesOrderRule = require('stylelint-order/rules/properties-order');
const configCreator = require('./configCreator');

const ruleName = 'plugin/rational-order';

module.exports = stylelint.createPlugin(ruleName, (enabled, options = {}, context) => {
  if (!enabled) {
    return () => {};
  }

  const expectation = configCreator(options);

  return stylelintOrderPropertiesOrderRule(expectation, undefined, context);
});

module.exports.ruleName = ruleName;
