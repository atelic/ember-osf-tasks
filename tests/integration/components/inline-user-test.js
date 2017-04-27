import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inline-user', 'Integration | Component | inline user', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('user', 1);

  this.render(hbs`{{inline-user}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#inline-user}}
      template block text
    {{/inline-user}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
