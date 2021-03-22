const config = {
  POST: "http://posts-clusterip-srv:4000/events",
  COMMENT: "http://comments-clusterip-srv:4001/events",
  MODERATION: "http://moderation-clusterip-srv:4003/events",
  QUERY: "http://query-clusterip-srv:4004/events",
};

module.exports = config;
