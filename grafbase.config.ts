import { graph, connector, config } from "@grafbase/sdk";

const g = graph.Standalone({ subgraph: true });

const pg = connector.Postgres("pg", { url: g.env("DATABASE_URL") });
g.datasource(pg, { namespace: false });

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
