var enbBemTechs = require('enb-bem-techs'),
    isProd = process.env.YENV === 'production';

module.exports = function (config) {
    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [require('enb/techs/file-provider'), { target: '?.bemjson.js' }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
			[enbBemTechs.bemjsonToBemdecl],
			// ie.css
			[require('enb/techs/css'), {
			    target: '?.ie.css',
			    sourceSuffixes: ['css', 'ie.css']
			}],
			// browser.js
			[require('enb-borschik/techs/js-borschik-include'), {
				target: '?.browser.js',
				sourceSuffixes: ['vanilla.js', 'browser.js', 'js']
			}],
			[require('enb/techs/file-merge'), {
			    target: '?.pre.js',
			    sources: ['?.browser.bh.js', '?.browser.js']
			}],
			[require('enb-modules/techs/prepend-modules'), {
			    source: '?.pre.js',
			    target: '?.js'
			}],
			// css
			[require('enb-stylus/techs/css-stylus'), { target: '?.noprefix.css' }],
			// bh
			[require('enb-bh/techs/bh-server'), {
			    jsAttrName: 'data-bem',
			    jsAttrScheme: 'json'
			}],
			// client bh
			[enbBemTechs.depsByTechToBemdecl, {
			    target: '?.bh.bemdecl.js',
			    sourceTech: 'js',
			    destTech: 'bemhtml'
			}],
			[enbBemTechs.deps, {
			    target: '?.bh.deps.js',
			    bemdeclFile: '?.bh.bemdecl.js'
			}],
			[enbBemTechs.files, {
			    depsFile: '?.bh.deps.js',
			    filesTarget: '?.bh.files',
			    dirsTarget: '?.bh.dirs'
			}],
			[require('enb-bh/techs/bh-client-module'), {
			    target: '?.browser.bh.js',
			    filesTarget: '?.bh.files',
			    jsAttrName: 'data-bem',
			    jsAttrScheme: 'json',
			    mimic: 'BEMHTML'
			}],
			// html
			[require('enb-bh/techs/html-from-bemjson')],
			// borschik
			[require('enb-borschik/techs/borschik'), {
				source: '?.js', target: '_?.js',
				freeze: true, minify: isProd
			}],
			[require('enb-borschik/techs/borschik'), {
				source: '?.css', target: '_?.css',
				tech: 'cleancss', freeze: true, minify: isProd
			}],
			[require('enb-borschik/techs/borschik'), {
				source: '?.css', target: '_?.ie.css',
				tech: 'cleancss', freeze: true, minify: isProd
			}]
        ]);

        nodeConfig.addTargets([
			'_?.css',
			'_?.ie.css',
			'_?.js',
			'?.bh.js',
			'?.html'
        ]);
    });

	config.nodes('*desktop.bundles/*', function (nodeConfig) {
		nodeConfig.addTechs([
			// essential
			[enbBemTechs.levels, { levels: getDesktops(config) }],
			// autoprefixer
			[require('enb-autoprefixer/techs/css-autoprefixer'), {
				browserSupport: ['last 2 versions', 'ie 10', 'ff 24', 'opera 12.16'],
				sourceTarget: '?.noprefix.css'
			}]
		]);
	});

};

function getDesktops(config) {
	return [
		{ path: 'libs/bem-core/common.blocks', check: false },
		{ path: 'libs/bem-core/desktop.blocks', check: false },
		'common.blocks',
		'desktop.blocks'
	].map(function (level) {
		return config.resolvePath(level);
	});
}
