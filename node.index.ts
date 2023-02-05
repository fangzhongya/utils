import { runDev } from '@fangzhongya/create/utils/package';
runDev({
    fileDirs(_url, _files, name) {
        return [
            `export * as ${name} from './${name}/index';`,
            // `export {  ${name} };`,
        ];
    },
});

// import { runDev } from '@fangzhongya/create/package';
// runDev({});
