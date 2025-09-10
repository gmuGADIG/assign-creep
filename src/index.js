import * as github from '@actions/github';

const token = process.env.GITHUB_TOKEN;
const octokit = github.getOctokit(token);

const { owner, repo } = github.context.repo;
const issue_number = github.context.payload.issue.number;

const headers = {
    accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
};
const { data: parentIssue } = await octokit.request(
  "GET /repos/{owner}/{repo}/issues/{issue_number}/parent",
  { owner, repo, issue_number, headers }
);

//console.log(parentIssue);

console.log(github.context.payload);

// await octokit.request(
//     "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees",
//     { owner, repo, issue_number, assignees = [] }
// );
