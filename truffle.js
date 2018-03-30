module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "123456",
      gas:1900000
    },
    live: {
	    host: "47.52.167.17",
	    port: 8545,
	    network_id: "*",
	    gas:1900000
	  }
  }
};
