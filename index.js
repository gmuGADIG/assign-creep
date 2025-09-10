import * as github from '@actions/github';

const token = process.env.GITHUB_TOKEN;
const octokit = github.getOctokit(token);

const { owner, repo } = github.context.repo;
const issue_number = github.context.payload.issue.number;

const { data: linkedIssues } = await octokit.request(
  "GET /repos/{owner}/{repo}/issues/{issue_number}/linked",
  { owner, repo, issue_number }
);

for (const item of linkedIssues) {
  console.log(`Issue #${item.number} - relationship: ${item.relation_type}`);
}

