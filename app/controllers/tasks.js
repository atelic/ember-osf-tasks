/* global AWS */
import $ from 'jquery';
import Ember from 'ember';

AWS.config.accessKeyId = 'XXX';
AWS.config.secretAccessKey = 'XXX';
const LAMBDA_CONFIG = {
  region: 'us-west-2',
  apiVersion: '2015-03-31'
};

function invokeLambda(functionName, payload) {
  const lambda = new AWS.Lambda(LAMBDA_CONFIG);
  const params = {
    FunctionName: functionName,
    Payload: payload
  };

  return lambda.invoke(params).promise().then(resp => JSON.parse(resp.Payload));
}

export default Ember.Controller.extend({
  extraText: '',
  move: false,
  manage: false,
  options: ['move contributors', 'manage permissions'],
  actions: {
    changeText(option) {
      if (option === 'move contributors') {
        this.set('manage', false);
        this.set('move', true);
      } else {
        this.set('move', false);
        this.set('manage', true);
      }
    },
    runTask() {
      if (this.get('move')) {
        const from = $('#moveFrom').val();
        const to = $('#moveTo').val();
        const payload = JSON.stringify({
          to: to,
          from: from
        });
        console.log(invokeLambda('migrate_contribs', payload)); // eslint-disable-line no-console
      } else {
        const from = $('#manageOn').val();
        const permission = $('#manageVal').val();
        const payload = JSON.stringify({
          from: from,
          permission: permission
        });
        console.log(invokeLambda('manage_permission', payload)); // eslint-disable-line no-console
      }
    }
  }
});
