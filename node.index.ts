import { runDev } from '@fangzhongya/create/utils/package';
runDev({
    cover: true,
    files: ['*.d.ts'],
    exports: {
        './*': './*',
    },
    fileDirs(_url, _files, name) {
        return [
            `export * as ${name} from './${name}/index';`,
        ];
    },
});

// import { runDev } from '@fangzhongya/create/package';
// runDev({});
