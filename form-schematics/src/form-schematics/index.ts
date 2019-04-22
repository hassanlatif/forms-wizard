import { Rule, SchematicContext, Tree, url, template, mergeWith, apply, SchematicsException, move } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { strings, normalize } from '@angular-devkit/core';
import {buildDefaultPath } from '@schematics/angular/utility/project';
import {parseName } from '@schematics/angular/utility/parse-name'

export function formSchematics(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI workspace");
    }

    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = _options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];
    const defaultProjectPath = normalize(buildDefaultPath(project)+'/features/forms');
    const parsedPath = parseName(defaultProjectPath, _options.name);

    const {name, path} = parsedPath;

    const sourceTemplate = url('./files');
    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
        name
      }),
      move(path)
    ]);
    
    return mergeWith(sourceParameterizedTemplate)(tree, _context);
  };
}
