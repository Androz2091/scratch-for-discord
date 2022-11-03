# Contributing to Scratch for Discord

Thanks for taking the time to contribute! ❤️

The following is a set of guidelines for contributing to Scratch for Discord. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request. These guidelines have been adapted from [Atom](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

[How To Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)

[Additional Notes](#additional-notes)
  * [Issue Labels](#issue-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct from the Contributor Covenant](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html). By participating, you are expected to uphold this code. Please report unacceptable behavior.

## What should I know before I get started?

### Scratch for Discord Architecture

Scratch for Discord is currently divided into two main pieces--frontent application and backend

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Scratch for Discord. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* **Check the [documentation](https://scratch-for-discord.docs.com)** on our support server for answers to many questions. Also check the **#announcements** channel for any recent announcements changes.
* **Perform a [search](https://github.com/scratch-for-discord/Web-Application_Frontend/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a :+1: to the existing issue instead of opening a new one.
* **Check our [Discord Server](https://discord.gg/TsQPMrNyBv) **Help or Feedback channel**
#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined this is a new bug using the steps from above make a new issue.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by telling us what you tried to do, if it has any errors the incorrect output.
* **Provide specific examples to demonstrate the steps**. Include links or images or .s4d file.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots or animated GIFs** which show you following the described steps and clearly demonstrate the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of S4D) or was this always a problem?
* If the problem started happening recently, what's the version and release channel as well as the versions of BetterDiscord?
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for BetterDiscord, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion.

#### Before Submitting An Enhancement Suggestion

* **Check if there's already an example which provides that enhancement.**
* **Perform a [cursory search](https://guides.github.com/features/issues/)** to see if the enhancement has already been suggested. If it has, add a :+1: to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined this is a new suggestion using the steps from above, create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots or animated GIFs** which help you demonstrate the steps or point out the part of BetterDiscord which the suggestion is related to.
* **Explain why this enhancement would be useful** to most Scratch for Discord users and isn't something that can or should be implemented as a block.

### Pull Requests

Please follow these steps to have your contribution considered by the maintainers:

1. Use a pull request template, if one exists.
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title

## Additional Notes

### Issue Labels

This section lists the labels we use to help us track and manage issues. Please open an issue if you have suggestions for new labels.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in.

#### Type of Issue and Issue State

| Label name | Description | View All |
| --- | --- | --- |
| `bug` | Issue related to a bug report, may or may not be yet confirmed. | [View All](https://github.com/scratch-for-discord/Web-Application_Frontend/issues?q=is%3Aopen+is%3Aissue+label%3ABug) |
| `Dependenties` | link among a project's terminal elements. | [View All](https://github.com/scratch-for-discord/Web-Application_Frontend/issues?q=is%3Aopen+is%3Aissue+label%3ADependencies) |
| `Documentation` | Documentation about this project. | [View All](https://github.com/scratch-for-discord/Web-Application_Frontend/issues?q=is%3Aopen+is%3Aissue+label%3ADocumentation) |
| `Enhancement` | Feature or improvement suggestion. | [View All](https://github.com/scratch-for-discord/Web-Application_Frontend/issues?q=is%3Aopen+is%3Aissue+label%3AEnhancement) |
| `Invalid` | Something that is wrong. | [View All](https://github.com/scratch-for-discord/Web-Application_Frontend/issues?q=is%3Aopen+is%3Aissue+label%3AInvalid) |
