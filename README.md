# assign-creep
github action for propagating issue assignments to parent issues

## Usage

just add a basic `.github/workflow/blah.yml` file to the root of your
repository:

```yaml
# .github/workflow/assign-creep.yml
name: Add Assignee to Parent Task

on:
  issues:
    types: [assigned]

permissions:
  issues: write

jobs:
  assign-creep:
    runs-on: ubuntu-latest
    steps:
      - uses: gmuGADIG/assign-creep@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
``` 
