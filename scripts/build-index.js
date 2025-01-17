import {execSync} from "child_process";
import {existsSync, readFileSync} from "fs";
import {arch, platform} from "os";

const PACKAGE_FRAMEWORK = JSON.parse(
    readFileSync("./node_modules/@kahi-ui/framework/package.json").toString()
);

const TEMPLATE_BIN_PATH = ({arch, platform, extension}) =>
    `./bin/stork.${platform}.${arch}${extension}`;

const TEMPLATE_COMMAND_BIN = ({bin, input, output}) =>
    `${bin} build --input ${input} --output ${output}`;

const TEMPLATE_INDEX_PATH = ({version}) => `./build/stork/index-${version}.toml`;

const TEMPLATE_OUTPUT_PATH = ({version}) => `./build/assets/stork/kahi-ui_docs_v${version}.st`;

function get_platform_extension() {
    switch (platform()) {
        case "windows":
            return ".exe";

        default:
            return "";
    }
}

const binary_path = TEMPLATE_BIN_PATH({
    arch: arch(),
    platform: platform(),
    extension: get_platform_extension(),
});

if (!existsSync(binary_path)) {
    throw new Error("bad platform to 'build-index' (platform is not currently supported)");
}

const index_path = TEMPLATE_INDEX_PATH({
    version: PACKAGE_FRAMEWORK.version,
});

if (!existsSync(index_path)) {
    throw new Error("bad platform to 'build-index' (index file not found)");
}

const output_path = TEMPLATE_OUTPUT_PATH({
    version: PACKAGE_FRAMEWORK.version,
});

const command = TEMPLATE_COMMAND_BIN({
    bin: binary_path,
    input: index_path,
    output: output_path,
});

execSync(command);
