module.exports = {
  apps: [
    {
      name: "uzum-backend",
      script: "src/server.ts",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      interpreter: "tsx",
    },
  ],
};
