'use strict'; // begin abstract changes

const acceptedScope = ["abstractfile", "abstract-cli", "abstractd", "assets", "cli", "desktop", "desktopapi", "desktop-api", "files", "gab", "gabapi", "git2go", "go", "gogit", "go-git", "illustrator", "libgit2", "logger", "plugin", "pluginclient", "resolver", "sentry", "sketch", "sketchfile", "sketch-plugin", "sketchtool", "store", "tracing", "xd", "xdfile", "xd-plugin"];

function addBangNote(commit) {
  // We check if we have a "!", if so it's a breaking change so
  // we create a note for it
  const match = commit.header.match(/^(\w*)(?:\((.*)\))?!: (.*)$/);

  if (match && commit.notes.length === 0) {
    const noteText = match[3]; // the description of the change.

    commit.notes.push({
      text: noteText
    });
  }
} // Those methods are modified versions of conventional-changelog-angular
// methods to support what we need (list of scope + bang)


module.exports = {
  // parserOpts sets the regexes and info needed to parse the commits
  parserOpts: {
    headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
    headerCorrespondence: [`type`, `scope`, `subject`],
    noteKeywords: [`BREAKING CHANGE`, `BREAKING CHANGES`],
    revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
    revertCorrespondence: [`header`, `hash`]
  },
  recommendedBumpOpts: {
    // whatBump returns what the next bump should be:
    // 2: patch
    // 1: minor
    // 0: major
    whatBump: (commits, _) => {
      let level = 2; // we default on a patch

      let breakings = 0;
      let features = 0;
      let refactors = 0;
      commits.forEach(commit => {
        // We check if we have a "!", if so it's a breaking change so
        // we create a note for it
        addBangNote(commit); // If we have a note, it's a breaking change (0)

        if (commit.notes.length > 0) {
          breakings += commit.notes.length;
          level = 0;
        } else if (commit.type === `feat`) {
          features += 1; // If we have a feat, it's a minor change (1) but we only
          // want to change it if the current level is set to patch
          // to make sure we don't overwrite lower level (like 0)

          if (level === 2) {
            level = 1;
          }
        } else if (commit.type === `refactor`) {
          refactors += 1; // Because most of our codebase is basically the CLI, and because
          // our refactor are pretty huge sometimes, I think it's safer to
          // count them as a minor change rather than a patch. This should
          // allows us to be more comfortable with what we send to the desktop
          // app

          if (level === 2) {
            level = 1;
          }
        }
      });
      return {
        level: level,
        reason: breakings === 1 ? `There is ${breakings} BREAKING CHANGE, ${features} feature(s), and ${refactors} refactor(s)` : `There are ${breakings} BREAKING CHANGES, ${features} feature(s), and ${refactors} refactor(s)`
      };
    }
  },
  // writerOpts is used for writing the changelog file
  writerOpts: {
    // transform applies the transformation on a commit so it's
    // correctly displayed in the changelog
    transform: (commit, context) => {
      let discard = true;
      const issues = []; // We check if we have a "!", if so it's a breaking change so
      // we create a note for it

      addBangNote(commit); // The way it works is that, if we have a note it has to be
      // for a breaking change. The parser is basically looking for
      // a line starting with "BREAKING CHANGE" or "BREAKING CHANGES"
      // and puts it as note (see parserOpts above).

      commit.notes.forEach(note => {
        note.title = 'BREAKING CHANGES';
        discard = false;
      });

      if (commit.type === 'feat') {
        commit.type = 'Features';
        discard = false;
      } else if (commit.type === 'fix') {
        commit.type = 'Bug Fixes';
        discard = false;
      } else if (commit.type === 'perf') {
        commit.type = 'Performance Improvements';
        discard = false;
      } else if (commit.type === 'revert' || commit.revert) {
        commit.type = 'Reverts';
        discard = false;
      } else if (commit.type === 'refactor') {
        commit.type = 'Code Refactoring';
        discard = false;
      } else if (commit.type === 'docs') {
        commit.type = 'Documentation';
      } else if (commit.type === 'style') {
        commit.type = 'Styles';
      } else if (commit.type === 'test') {
        commit.type = 'Tests';
      } else if (commit.type === 'build') {
        commit.type = 'Build System';
      } else if (commit.type === 'ci') {
        commit.type = 'Continuous Integration';
      } else if (commit.type === 'chore') {
        commit.type = 'Chores';
      } else {
        // If someone used an invalid type we still put it in the
        // changelog as it could be something important.
        // We only do this because the changelog is private and
        // we use it as a way to make sure we're not pushing
        // something important in the wrong CLI version
        commit.type = 'Other Changes';
        discard = false;
      }

      if (discard) {
        return;
      }

      if (commit.scope === '*') {
        commit.scope = '';
      } // begin abstract changes
      // Because we share our codebase with other projects, we
      // want to remove all the commits with the wrong scope
      // (see acceptedScope)


      let keepCommit = false;

      if (commit.scope) {
        const scopes = commit.scope.split(",");
        scopes.every((s, _) => {
          if (acceptedScope.indexOf(s.trim().toLowerCase()) > -1) {
            keepCommit = true;
            return false;
          }

          return true;
        });
      }

      if (!keepCommit) {
        return;
      } // end abstract changes


      if (typeof commit.hash === 'string') {
        commit.shortHash = commit.hash.substring(0, 7);
      }

      if (typeof commit.subject === 'string') {
        let url = context.repository ? `${context.host}/${context.owner}/${context.repository}` : context.repoUrl;

        if (url) {
          url = `${url}/issues/`; // because the CLI is public but the repo is private,
          // we use the SDK URL.
          // So to make sure the links in the changelog are valid, we
          // need to change it back on the fly
          // Note that this only works for PR links and not for
          // commit links and tags, so we also have the same kind of
          // fix in the `scripts/version.sh`

          url = url.replace("abstract-sdk", "projects"); // Issue URLs.

          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue);
            return `[#${issue}](${url}${issue})`;
          });
        }

        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g, (_, username) => {
            if (username.includes('/')) {
              return `@${username}`;
            }

            return `[@${username}](${context.host}/${username})`;
          });
        }
      } // remove references that already appear in the subject


      commit.references = commit.references.filter(reference => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }

        return false;
      });
      return commit;
    }
  }
};