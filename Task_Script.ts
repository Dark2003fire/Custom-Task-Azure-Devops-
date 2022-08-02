import tl = require('azure-pipelines-task-lib/task');
async function run() {
try {
const inputString: string | undefined = tl.getInput('samplestring', true);
if (inputString == 'bad') {
tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
return;
}
console.log('Hello', inputString);
}
catch (err) {
tl.setResult(tl.TaskResult.Failed, err.message);
}
}
run();
node index.js
##vso[task.debug]agent.workFolder=undefined
##vso[task.debug]loading inputs and endpoints
##vso[task.debug]loaded 0
##vso[task.debug]task result: Failed
##vso[task.issue type=error;]Input required: samplestring
##vso[task.complete result=Failed;]Input required: samplestring
$env:INPUT_SAMPLESTRING="Human"
node index.js
##vso[task.debug]agent.workFolder=undefined
##vso[task.debug]loading inputs and endpoints
##vso[task.debug]loading INPUT_SAMPLESTRING
##vso[task.debug]loaded 1
##vso[task.debug]Agent.ProxyUrl=undefined
##vso[task.debug]Agent.CAInfo=undefined
##vso[task.debug]Agent.ClientCert=undefined
##vso[task.debug]Agent.SkipCertValidation=undefined
##vso[task.debug]samplestring=Human
Hello Human

import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'azure-pipelines-task-lib/mock-test';
describe('Sample task tests', function () {
before( function() {
});
after(() => {
});
it('should succeed with simple inputs', function(done: Mocha.Done) {
// Add success test here
});
it('it should fail if tool returns 1', function(done: Mocha.Done) {
// Add failure test here
});
});

import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');
let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);
tmr.setInput('samplestring', 'human');
tmr.run();

it('should succeed with simple inputs', function(done: Mocha.Done) {
this.timeout(1000);
let tp = path.join(__dirname, 'success.js');
let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
tr.run();
console.log(tr.succeeded);
assert.equal(tr.succeeded, true, 'should have succeeded');
assert.equal(tr.warningIssues.length, 0, "should have no warnings");
assert.equal(tr.errorIssues.length, 0, "should have no errors");
console.log(tr.stdout);
assert.equal(tr.stdout.indexOf('Hello human') >= 0, true, "should display Hello human");
done();
});

import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');
let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);
tmr.setInput('samplestring', 'bad');
tmr.run();

it('it should fail if tool returns 1', function(done: Mocha.Done) {
this.timeout(1000);
let tp = path.join(__dirname, 'failure.js');
let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
tr.run();
console.log(tr.succeeded);
assert.equal(tr.succeeded, false, 'should have failed');
assert.equal(tr.warningIssues.length, 0, "should have no warnings");
assert.equal(tr.errorIssues.length, 1, "should have 1 error issue");
assert.equal(tr.errorIssues[0], 'Bad input was given', 'error issue output');
assert.equal(tr.stdout.indexOf('Hello bad'), -1, "Should not display Hello bad");
done();
});
