import { runDev } from '@fangzhongya/create/out/test';
runDev({
    matchexts: [/(?<![\\|\/]index\.ts)$/],
});

// import { runDev } from '@fangzhongya/create/package';
// runDev({});
