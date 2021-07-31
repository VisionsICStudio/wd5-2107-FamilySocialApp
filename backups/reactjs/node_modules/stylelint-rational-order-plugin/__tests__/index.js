const stylelint = require('stylelint');
const plugin = require('../lib');

const { ruleName } = plugin;

function getPluginOptions(code, rules) {
  return {
    code,
    configBasedir: __dirname,
    config: {
      plugins: ['../lib'],
      rules,
    },
  };
}

describe('stylelint-rational-order-plugin', () => {
  describe('correct order with enabled', () => {
    it('with default (borderInBoxModel=false and emptyLineBeetweenGroup=false)', done => {
      const rules = {
        [ruleName]: true,
      };
      const correct = `
      a {
        position: relative;
        display: block;
        color: red;
        background: white;
        border: 1px solid blue;
      }
    `;

      return stylelint
        .lint(getPluginOptions(correct, rules))
        .then(output => {
          const { errored } = output;
          const { warnings } = output.results[0];

          expect(errored).toBeFalsy();
          expect(warnings).toHaveLength(0);

          return done();
        })
        .catch(error => done(error));
    });

    it('with borderInBoxModel=true and emptyLineBeetweenGroup=false', done => {
      const rules = {
        [ruleName]: [
          true,
          {
            borderInBoxModel: true,
          },
        ],
      };
      const correct = `
      a {
        position: relative;
        display: block;
        border: 1px solid blue;
        color: red;
        background: white;
      }
    `;

      return stylelint
        .lint(getPluginOptions(correct, rules))
        .then(output => {
          const { errored } = output;
          const { warnings } = output.results[0];

          expect(errored).toBeFalsy();
          expect(warnings).toHaveLength(0);

          return done();
        })
        .catch(error => done(error));
    });

    it('with borderInBoxModel=false and emptyLineBeetweenGroup=true', done => {
      const rules = {
        [ruleName]: [
          true,
          {
            emptyLineBeetweenGroup: true,
          },
        ],
      };
      const correct = `
      a {
        position: relative;

        display: block;
        
        color: red;
        
        background: white;
        border: 1px solid blue;
      }
    `;

      return stylelint
        .lint(getPluginOptions(correct, rules))
        .then(output => {
          const { errored } = output;
          const { warnings } = output.results[0];

          expect(errored).toBeFalsy();
          expect(warnings).toHaveLength(0);

          return done();
        })
        .catch(error => done(error));
    });

    it('with borderInBoxModel=true and emptyLineBeetweenGroup=true', done => {
      const rules = {
        [ruleName]: [
          true,
          {
            emptyLineBeetweenGroup: true,
            borderInBoxModel: true,
          },
        ],
      };
      const correct = `
        a {
          position: relative;

          display: block;
          border: 1px solid blue;
          
          color: red;
          
          background: white;
        }
      `;

      return stylelint
        .lint(getPluginOptions(correct, rules))
        .then(output => {
          const { errored } = output;
          const { warnings } = output.results[0];

          expect(errored).toBeFalsy();
          expect(warnings).toHaveLength(0);

          return done();
        })
        .catch(error => done(error));
    });
  });

  describe('with disabled', () => {
    it('correct', done => {
      const rules = {
        [ruleName]: false,
      };
      const wrong = `
      a {
        position: relative;
        display: block;
        color: red;
        background: white;
        border: 1px solid blue;
      }
    `;

      return stylelint
        .lint(getPluginOptions(wrong, rules))
        .then(output => {
          const { errored } = output;
          const { warnings } = output.results[0];

          expect(errored).toBeFalsy();
          expect(warnings).toHaveLength(0);

          return done();
        })
        .catch(error => done(error));
    });
  });
});
