import { pascalCase } from "change-case";
import Handlebars from "handlebars";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { load } from 'cheerio'

const scriptsDir = fileURLToPath(new URL(".", import.meta.url));
const srcDir = resolve(".");
const generatedSrcDir = resolve(srcDir, "components/icons/generated");


mkdirSync(generatedSrcDir, { recursive: true });

Handlebars.registerHelper("pascalCase", iconName => pascalCase(iconName));

const iconComponentTemplate = Handlebars.compile(readFileSync(resolve(scriptsDir, "iconComponent.tsx.hbs"), 'utf8'));
const componentsIndexTemplate = Handlebars.compile(readFileSync(resolve(scriptsDir, "index.ts.hbs"), "utf8"));

function getListSVGIcons() {
  const iconsDir = resolve(srcDir, "resources/icons/min");
  const icons = readdirSync(iconsDir).filter(icon => icon.endsWith(".svg"));
  return icons;
}

const listSVGIcons = getListSVGIcons();
for(const icon of listSVGIcons) {
    const iconPath = resolve(srcDir, "resources/icons/min", icon);
    const iconName = pascalCase(icon.replace(".svg", ""));
    const svgFile = readFileSync(iconPath, 'utf8');
    const svgFileContent = load(svgFile, { xmlMode: true });
    const svgFileChildren = svgFileContent('svg').children();
    const svgChildrenString = svgFileChildren.toString();

    writeFileSync(
        join(generatedSrcDir, `${iconName}.tsx`),
        iconComponentTemplate({
            iconName,
            svgContent: svgChildrenString
        }),

    );
}

writeFileSync(
    join(generatedSrcDir, `index.ts`),
    componentsIndexTemplate({
        iconNames: listSVGIcons.map(icon => pascalCase(icon.replace(".svg", "")))
    }),
);
