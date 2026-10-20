# MSR Research Knowledge Base

[![CI](https://github.com/RahfayS/COIS-3060-Assignment-1/actions/workflows/ci.yml/badge.svg?branch=test%2Fpage-structure)](https://github.com/RahfayS/COIS-3060-Assignment-1/actions/workflows/ci.yml)

A web-based reference guide for Mining Software Repositories (MSR) researchers, developed for **COIS 3060H – Software Processes**.

The project helps new PhD students explore research data sources, collection methods, analysis methods, and publication venues. It demonstrates requirements analysis, project planning, version control, testing, documentation, and continuous integration.

## Project Links

- [Website](https://RahfayS.github.io/COIS-3060-Assignment-1/src/)
- [Requirements and User Stories](docs/requirements.md)
- [Issues](https://github.com/RahfayS/COIS-3060-Assignment-1/issues)
- [Milestones](https://github.com/RahfayS/COIS-3060-Assignment-1/milestones)
- [GitHub Actions](https://github.com/RahfayS/COIS-3060-Assignment-1/actions)


## Implemented Features

The selected implementation scope is Page Structure & Navigation with Data Sources content.

- Four navigation buttons:
  - Data Sources
  - Collection Methods
  - Analysis Methods
  - Publication Venues
- JavaScript tab switching that displays the selected section and hides the others.
- A Home section displayed initially.
- A Data Sources table containing source names, data types, and descriptions.
- Basic CSS styling for readability.

The Data Sources table includes:

1. GitHub
2. Stack Overflow
3. JIRA
4. App Stores
5. Travis CI / Jenkins
6. Mailing Lists
7. npm Registry

The other three content sections currently contain headings only. Their detailed content remains future work.

## Requirements Analysis

Requirements were extracted from the customer meeting notes and documented as user stories in [`docs/requirements.md`](docs/requirements.md).

The main requirements are to:

- Provide four clearly labelled research categories.
- Allow users to switch between categories.
- Present information in readable tables or lists.
- Include the relevant details for each source, method, or venue.
- Maintain a simple, professional appearance.

## Milestones and Future Work

| Milestone | Scope | Implementation Status |
| --- | --- | --- |
| Page Structure & Navigation with Data Sources | Page structure, tab switching, seven data sources, and basic styling | Implemented in the feature branch |
| Collection Methods | Collection tools, purposes, advantages, and limitations | Planned |
| Analysis Methods | Analysis techniques, types, and common use cases | Planned |
| Publication Venues | Conferences and journals, abbreviations, focus areas, and MSR relevance | Planned |
| Styling & Polish | Responsive layouts, active-tab feedback, and accessibility improvements | Further work planned |

GitHub milestones and linked issues track project progress. 

## Repository Structure

```text
.github/
  workflows/
    ci.yml
docs/
  requirements.md
src/
  index.html
  style.css
  script.js
tests/
  tests.js
  test_checklist.md
README.md
.gitignore
```

## Running the Website Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/RahfayS/COIS-3060-Assignment-1.git
   cd COIS-3060-Assignment-1
   ```

2. Select a branch containing the implemented website:

   ```bash
   git switch feature/page-structure
   ```

   After the implementation is merged, use `main` instead.

3. Open `src/index.html` in a browser.

The website uses plain HTML, CSS, and JavaScript. No package installation or build process is required to view it.


### Automated Test Cases

| Test | Expected Result |
| --- | --- |
| Home page exists and is not empty | `src/index.html` can be read and contains at least one non-whitespace character |
| Data Sources label exists | The HTML contains `Data Sources` |
| Collection Methods label exists | The HTML contains `Collection Methods` |
| Analysis Methods label exists | The HTML contains `Analysis Methods` |
| Publication Venues label exists | The HTML contains `Publication Venues` |


The corresponding manual checks are documented in [`tests/test_checklist.md`](tests/test_checklist.md).


## Continuous Integration

The workflow in `.github/workflows/ci.yml` runs on pushes and pull requests.
The workflow and test file must be committed and pushed to GitHub.

## GitHub Pages

The website uses branch-based GitHub Pages deployment.

https://RahfayS.github.io/COIS-3060-Assignment-1/src/

Pushing changes to the selected publishing branch triggers a website update.

Branch-based Pages deployment is separate from the custom testing workflow and does not automatically wait for its tests to pass.

