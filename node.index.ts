import { runDev } from '@fangzhongya/create/export/package';
runDev({
    cover: true,
    fileCover: true,
    upversion: true,
    packageObj: {
        exports: {
            './*': './*',
        },
        typesVersions: {
            '*': {
                '*': ['./dist/*'],
            },
        },
    },
    fileDirs(_url, _files, name) {
        return [
            `export * as ${name} from './${name}/index';`,
        ];
    },
});

// import { runDev } from '@fangzhongya/create/package';
// runDev({});
