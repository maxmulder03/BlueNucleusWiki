import "update-article.yml"

{
    name: "Update Articles JSON",
    {
        push: {
            paths: [
                "feature"
            ]
        }
    },
    {
        updateArticleJson: {
            runs: "ubuntu-latest",
            permissions: {
                contents: "write"
            },
            steps: null,
            name1: "checkout article repository",
            uses: "actions/checkout@v4",
            with: {
                ref: "feature"
            },
            names: "Update articles JSON",
            run: "echo jq '.name = title | .author = authorname | .publishDate = datepublished | .updateDate = dateupdated >> articles.json'",
            final: "Commit and push changes",
            use: "/git-commit-m/git-push/git-diff",
            within: {
                commit_message: "Updated articles.json sucessfully!",
                file_pattern: "articles.json"
            }
        }
    }
};
