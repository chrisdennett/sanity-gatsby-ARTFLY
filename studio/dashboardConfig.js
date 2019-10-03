export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5d95e73828b476bbae90dd96",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-ARTFLY-studio",
                  apiId: "400e40b7-5dc3-4bf5-8833-09de5b684156"
                },
                {
                  buildHookId: "5d95e7388a1c180fe5ef677b",
                  title: "Portfolio Website",
                  name: "sanity-gatsby-ARTFLY",
                  apiId: "e5d7d1c4-9778-4a15-b8bd-ca663e3693bd"
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/chrisdennett/sanity-gatsby-ARTFLY",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-ARTFLY.netlify.com",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["project"] },
      layout: { width: "medium" }
    },
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-gatsby-portfolio"
      }
    }
  ]
};
