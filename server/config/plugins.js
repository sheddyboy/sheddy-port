module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        project: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  // ...
});
