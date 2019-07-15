const fs = require('fs');

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Game implements Node @dontInfer {
      id: ID!
      date: String!
      venue: String!
      slug: String!
      home: Team!
      away: Team!
      win: Decision!
      loss: Decision!
      save: Decision
      homeruns: [Homerun]
    }

    type Decision {
      name: String
      note: String
    }

    type Homerun {
      name: String!
      count: Int!
      seasonTotals: SeasonTotals!
    }

    type SeasonTotals {
      homeruns: Int!
      runs: Int!
      rbi: Int!
    }

    type Team {
      name: String!
      abbreviation: String!
      wins: Int!
      losses: Int!
      score: Int!
      innings: [String]!
    }
  `);
};

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/';

  const slugify = (home, away, date) => {
    const formattedDate = new Date(date);
    const dateString = `${formattedDate.getFullYear()}-${formattedDate.getMonth() + 1}-${formattedDate.getDate()}`;
    const slug = `${away.toLowerCase()}-vs-${home.toLowerCase()}-${dateString}`;

    return `${basePath}/${slug}`;
  };

  createResolvers({
    Game: {
      slug: {
        resolve: source => slugify(source.home.abbreviation, source.away.abbreviation, source.date)
      }
    }
  });
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/games.js')
  });

  const result = await graphql(`
    query {
      allGame {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading games', result.errors);
    return;
  }

  const games = result.data.allGame.nodes;

  games.forEach(game => {
    const slug = game.slug;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/game.js'),
      context: {
        gameID: game.id
      }
    });
  });
};
