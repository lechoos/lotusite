module.exports = {
	apps: [
		{
			script: 'npm run start',
		},
	],

	deploy: {
		production: {
			user: 'root',
			host: '192.109.244.63',
			ref: 'origin/master',
			repo: 'git@github.com:lechoos/lotusite.git',
			path: '/root',
			'pre-deploy-local': '',
			'post-deploy':
				'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
			'pre-setup': '',
      'ssh_options': "ForwardAgent=yes"
		},
	},
};
