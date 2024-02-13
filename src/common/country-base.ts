export const eu_countries = [
    'it',
    'de',
    'fr',
    'lu',
    'gr',
    'mf',
    'es',
    'sk',
    'lt',
    'nl',
    'at',
    'bg',
    'si',
    'cy',
    'be',
    'ro',
    'hr',
    'pt',
    'pl',
    'lv',
    'ee',
    'cz',
    'fi',
    'hu',
    'dk',
    'se',
    'ie',
    'im',
    'mt',
    'gb',
]

export const latam_countries = [
    'br',
    'ag',
    'aw',
    'bs',
    'bb',
    'ky',
    'cu',
    'dm',
    'do',
    'gd',
    'gp',
    'ht',
    'jm',
    'mq',
    'pr',
    'kn',
    'lc',
    'vc',
    'tt',
    'tc',
    'vg',
    'bz',
    'cr',
    'sv',
    'gt',
    'hn',
    'mx',
    'ni',
    'pa',
    'ar',
    'bo',
    'cl',
    'co',
    'ec',
    'gf',
    'gy',
    'py',
    'pe',
    'sr',
    'uy',
    've',
]

export const african_countries = [
    'dz',
    'ao',
    'bj',
    'bw',
    'bf',
    'bi',
    'cm',
    'cv',
    'cf',
    'td',
    'km',
    'cg',
    'cd',
    'ci',
    'dj',
    'eg',
    'gq',
    'er',
    'et',
    'ga',
    'gm',
    'gh',
    'gn',
    'gw',
    'ke',
    'ls',
    'lr',
    'ly',
    'mg',
    'ml',
    'mw',
    'mr',
    'mu',
    'yt',
    'ma',
    'mz',
    'na',
    'ne',
    'ng',
    're',
    'st',
    'sn',
    'sc',
    'sl',
    'so',
    'za',
    'ss',
    'sd',
    'sz',
    'tz',
    'tg',
    'tn',
    'ug',
    'eh',
    'zm',
    'zw',
]

// special partnership payments for this countries
export const cpa_plan_countries = ['za', 'ec']

export const isEuCountry = (clients_country: (typeof eu_countries)[number]): boolean =>
    eu_countries.includes(clients_country)

// added for QA purposes only
export const p2p_countries = [
    'af',
    'ax',
    'al',
    'dz',
    'ad',
    'ao',
    'ai',
    'aq',
    'ag',
    'ar',
    'am',
    'aw',
    'az',
    'bs',
    'bh',
    'bd',
    'bb',
    'by',
    'bz',
    'bj',
    'bm',
    'bt',
    'bo',
    'ba',
    'bw',
    'bv',
    'br',
    'io',
    'bn',
    'bf',
    'bi',
    'kh',
    'cm',
    'cv',
    'bq',
    'ky',
    'cf',
    'td',
    'cl',
    'cn',
    'cx',
    'cc',
    'co',
    'km',
    'cg',
    'cd',
    'ck',
    'cr',
    'ci',
    'cu',
    'cw',
    'dj',
    'dm',
    'do',
    'ec',
    'eg',
    'sv',
    'gq',
    'er',
    'et',
    'fk',
    'fo',
    'fj',
    'gf',
    'pf',
    'tf',
    'ga',
    'gm',
    'ge',
    'gh',
    'gi',
    'gl',
    'gd',
    'gp',
    'gt',
    'gn',
    'gw',
    'gy',
    'ht',
    'hm',
    'va',
    'hn',
    'is',
    'in',
    'id',
    'iq',
    'jm',
    'jp',
    'jo',
    'kz',
    'ke',
    'ki',
    'kp',
    'kw',
    'kg',
    'la',
    'lb',
    'ls',
    'lr',
    'ly',
    'li',
    'mo',
    'mk',
    'mg',
    'mw',
    'mv',
    'ml',
    'mh',
    'mq',
    'mr',
    'mu',
    'yt',
    'mx',
    'fm',
    'md',
    'mc',
    'mn',
    'me',
    'ms',
    'ma',
    'mz',
    'mm',
    'na',
    'nr',
    'np',
    'an',
    'nc',
    'ni',
    'ne',
    'ng',
    'nu',
    'nf',
    'no',
    'om',
    'pk',
    'pw',
    'ps',
    'pa',
    'pg',
    'pe',
    'ph',
    'pn',
    'qa',
    're',
    'ru',
    'sh',
    'kn',
    'lc',
    'pm',
    'vc',
    'bl',
    'mf',
    'ws',
    'sm',
    'st',
    'sa',
    'sn',
    'rs',
    'sc',
    'sl',
    'sg',
    'sx',
    'sb',
    'so',
    'za',
    'gs',
    'ss',
    'lk',
    'sd',
    'sr',
    'sj',
    'sz',
    'ch',
    'sy',
    'tw',
    'tj',
    'tz',
    'th',
    'tl',
    'tg',
    'tk',
    'to',
    'tt',
    'tn',
    'tr',
    'tm',
    'tc',
    'tv',
    'ug',
    'ua',
    'uy',
    'uz',
    've',
    'vn',
    'vg',
    'wf',
    'eh',
    'ye',
    'zm',
    'zw',
]

export const not_available_appgallery_countries = [
    'af',
    'al',
    'dz',
    'as',
    'ao',
    'am',
    'bh',
    'bd',
    'bj',
    'ba',
    'bw',
    'br',
    'bn',
    'bf',
    'kh',
    'cm',
    'cv',
    'td',
    'km',
    'cg',
    'cd',
    'ci',
    'dj',
    'do',
    'eg',
    'er',
    'fj',
    'gf',
    'pf',
    'ga',
    'gm',
    'gh',
    'gn',
    'gw',
    'in',
    'iq',
    'jp',
    'jo',
    'ke',
    'kw',
    'la',
    'lb',
    'lr',
    'ly',
    'mg',
    'mw',
    'my',
    'mv',
    'ml',
    'mr',
    'mu',
    'yt',
    'mx',
    'mn',
    'me',
    'ma',
    'mz',
    'mm',
    'na',
    'nr',
    'np',
    'ne',
    'ng',
    'om',
    'pk',
    'pe',
    'ph',
    'qa',
    'rw',
    'st',
    'sa',
    'sn',
    'rs',
    'sc',
    'sl',
    'sg',
    'sx',
    'sb',
    'so',
    'gs',
    'ss',
    'lk',
    'sz',
    'tj',
    'tz',
    'th',
    'tg',
    'to',
    'tn',
    'tr',
    'tm',
    'ug',
    'ae',
    'uz',
    'vu',
    'ye',
    'zm',
    'zw',
    'bt',
    'xk',
    'tv',
]

export const not_avalable_appgallery_and_ios_countries = [
    'bv',
    'io',
    'cx',
    'cc',
    'cw',
    'fk',
    'tf',
    'gg',
    'im',
    'je',
    'ki',
    'nu',
    'nf',
    'pn',
    'bq',
    'sh',
    'vc',
    'gs',
    'tl',
    'tk',
    'eh',
    'aq',
    'hm',
    'um',
]

export const not_available_iOS_countries = ['ad', 'ck', 'ps', 'et', 'bi', 'cf', 'gq', 'ls']

export const not_available_ctrader_countries = [
    'as',
    'au',
    'at',
    'be',
    'bg',
    'ca',
    'ky',
    'hr',
    'cu',
    'cy',
    'cz',
    'dk',
    'ee',
    'fi',
    'fr',
    'de',
    'gr',
    'gu',
    'gg',
    'hk',
    'hu',
    'ir',
    'ie',
    'im',
    'il',
    'it',
    'je',
    'kp',
    'lv',
    'lt',
    'lu',
    'my',
    'mt',
    'mm',
    'nl',
    'mp',
    'py',
    'pl',
    'pt',
    'pr',
    'ro',
    'rw',
    'sg',
    'sk',
    'si',
    'es',
    'se',
    'sy',
    'ae',
    'gb',
    'um',
    'us',
    'vu',
    'vi',
    'jp',
    'no',
]
