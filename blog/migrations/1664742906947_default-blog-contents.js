/* eslint-disable camelcase */

exports.shorthands = undefined;

const userName = 'cfan';
const blogContents = `
  This is my first blog.
  It is very important.
  I want to kick out this project with a perfect beginning! Please try your hard to overcome all the difficulties and try to make it a great and learning project!
`;

const title = `Chaoyangs title`;
const description = `Chaoyangs description`;

exports.up = (pgm) => {
  pgm.sql(
    `
    INSERT INTO blogs (username, contents, description, title) 
    VALUES ('${userName}', '${blogContents}', '${description}', '${title}')
  ;`
  );
};

exports.down = (pgm) => {};
