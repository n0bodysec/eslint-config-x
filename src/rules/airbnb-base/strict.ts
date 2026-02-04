import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import globals from 'globals';

const config: FlatConfig.Config = {
	name: '@snowyyd/eslint-config-x/rules/airbnb-base/strict',
	languageOptions: {
		globals: {
			...globals.node,
		},
	},
	rules: {
		strict: ['error', 'never'],
	},
};

export default config;
