// https://app.netlify.com/sites/sanity-gatsby-ARTFLY
// https://app.netlify.com/sites/sanity-gatsby-artfly-studio/overview

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
                "NOTE: You need to recreate the live site by pressing DEPLOY for new content/updates.",
              sites: [
                {
                  buildHookId: "5d95e7388a1c180fe5ef677b",
                  title: "Artfly Website - Deploy after content changes",
                  name: "sanity-gatsby-artfly",
                  apiId: "e5d7d1c4-9778-4a15-b8bd-ca663e3693bd"
                },
                {
                  buildHookId: "5d95e73828b476bbae90dd96",
                  title: "CMS - i.e. the site you're on now",
                  name: "sanity-gatsby-artfly-studio",
                  apiId: "400e40b7-5dc3-4bf5-8833-09de5b684156"
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
            value: "https://artfly.io",
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
