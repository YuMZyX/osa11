Hypothetical application - HypApp

CI setup steps for HypApp, coded with Ruby (on Rails):
- For linting we will use RuboCop, a code style checker and formatter based on the community-driven Ruby Style Guide.
- For unit testing purposes we will take advantage of minitest testing framework and for integration, E2E testing and automation we utilize Capybara acceptance test framework.
- For building purposes we will setup a specific build script which will be called on every push to the Git repository. For deployment we will use Mina, a fast deployment and server automation tool.

For Jenkins/GitHub Actions there are several alternatives to take into consideration. Some of the more popular alternatives include: GitLab, CircleCI, TeamCity, AWS CodePipeline and Azure DevOps. GitLab and Teamcity are self-hosted platforms while CircleCI, AWS CodePipeline and Azure DevOps are cloud-based solutions.

For HypApp, being worked on by a team of 6 people, it would be better to run the setup on a cloud-based environment such as GitHub Actions. This is because HypApp is a small to medium size software project with no special requirements for the hardware. This would also mean that we don't have to go through the complicated setup of a self-hosted option such as Jenkins since it would not add any extra value to our project.


