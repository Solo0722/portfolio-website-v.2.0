export const projectsQuery = `*[_type == 'project']{
    image {
      asset -> {
        url
      }
    },
    description,
    name,projectType,projectUrl,githubUrl,_id
}`;

export const blogsQuery = `*[_type == 'blog']{...}`;
