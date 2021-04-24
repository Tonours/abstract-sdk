'use strict'
const changelog = require('./changelog-config');

const defaultContext = {
  repoUrl: "",
  host: "https://github.com",
  owner: "goabstract",
  repository: "abstract-sdk",
}

test('not accepted scopes are refused', () => {
  const commitInput = {
    header: "feat(api): do something",
    subject: "",
    notes: [],
    type: "feat",
    scope: "api",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const commitOutput = changelog.writerOpts.transform(commitInput, defaultContext)
  expect(commitOutput).toBeUndefined();
});

test('accepted scopes are accepted', () => {
  const commitInput = {
    header: "feat(cli): do something",
    notes: [],
    type: "feat",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const commitOutput = changelog.writerOpts.transform(commitInput, defaultContext)
  expect(commitOutput).toBeDefined();
});

test('discarded types are refused', () => {
  const commitInput = {
    header: "docs(cli): update readme",
    notes: [],
    type: "docs",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const commitOutput = changelog.writerOpts.transform(commitInput, defaultContext)
  expect(commitOutput).toBeUndefined();
});

test('Breaking changes on discarded types should pass', () => {
  const commitInput = {
    header: "docs(cli)!: update readme",
    notes: [],
    type: "docs",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const commitOutput = changelog.writerOpts.transform(commitInput, defaultContext)
  expect(commitOutput.type).toBe("Documentation");
  expect(commitOutput.notes).toHaveLength(1);
});

test('accepted types are accepted', () => {
  const commitInput = {
    header: "refactor(abstractd): change response format (#4135)",
    notes: [],
    type: "refactor",
    scope: "abstractd",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const commitOutput = changelog.writerOpts.transform(commitInput, defaultContext)
  expect(commitOutput.type).toBe("Code Refactoring");
});

test('invalid types are accepted', () => {
  const commitInput = {
    header: "ref(abstractd): change response format (#4135)",
    notes: [],
    type: "ref",
    scope: "abstractd",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const commitOutput = changelog.writerOpts.transform(commitInput, defaultContext)
  expect(commitOutput.type).toBe("Other Changes");
});

test('bang should add a note', () => {
  const commitInput = {
    header: "refactor(cli)!: do something",
    notes: [],
    type: "feat",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const commitOutput = changelog.writerOpts.transform(commitInput, defaultContext)
  expect(commitOutput.notes).toHaveLength(1);
});

test('default should bump the patch number', () => {
  const commitInput = {
    header: "chore(cli): do something",
    notes: [],
    type: "chore",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const out = changelog.recommendedBumpOpts.whatBump([commitInput])
  expect(out.level).toBe(2);
});

test('feat should bump minor', () => {
  const commitInput = {
    header: "feat(cli): do something",
    notes: [],
    type: "feat",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const out = changelog.recommendedBumpOpts.whatBump([commitInput])
  expect(out.level).toBe(1);
});

test('refactor should bump minor', () => {
  const commitInput = {
    header: "refactor(cli): change something",
    notes: [],
    type: "refactor",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const out = changelog.recommendedBumpOpts.whatBump([commitInput])
  expect(out.level).toBe(1);
});

test('Bang should bump major', () => {
  const commitInput = {
    header: "refactor(cli)!: do something",
    notes: [],
    type: "refactor",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const out = changelog.recommendedBumpOpts.whatBump([commitInput])
  expect(out.level).toBe(0);
});

test('Breaking Note should bump major', () => {
  const commitInput = {
    header: "refactor(cli): do something",
    notes: [ { text: "this breaks things" }],
    type: "refactor",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const out = changelog.recommendedBumpOpts.whatBump([commitInput])
  expect(out.level).toBe(0);
});



test('Repository should never be SDK', () => {
  const commitInput = {
    header: "feat(cli): do something",
    subject: "do something with #4211",
    notes: [],
    type: "feat",
    scope: "cli",
    hash: "bb67e8300a57c9beb72a748850760e7aca7d1c78",
    shortHash: "",
    references: [],
  }
  const commitOutput = changelog.writerOpts.transform(commitInput, defaultContext)
  expect(commitOutput.subject).toBe("do something with [#4211](https://github.com/goabstract/projects/issues/4211)");
});