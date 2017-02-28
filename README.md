# cfn-params

cfn-params is a node js command line tool to reformat parameters in a yaml file to the needed format for the `aws cloudformation` commands.

## Installation

To install cfn-params open a terminal and issue: `npm install -g cfn-params`

## Usage

To convert a parameter YAMl file type `cfn-params <yaml-file>` in a shell.

You can include this directly into your cli command:

`$ aws cloudformation create-stack --stack-name stack --template-body file://template.yaml --parameters $(cfn-params params.yaml)`

### deploy option

When specifying the command line option `--deploy` the output format is suitable for the new `aws cloudforamtion deploy` command.

## YAML Format

The format of the YAML-file is as follow:

```yaml
Key1: Value1
Key2: Value2
SomeCommaList:
  - Item1
  - Item2
```

This is converted into:

```text
ParameterKey=Key1,ParameterValue='Value1' ParameterKey=Key2,ParameterValue='Value2' ParameterKey=SomeCommaList,ParameterValue='Item1,Item2'
```

## Contribute

Feel free to open issues, provide code improvements or updates to the documentation.

## License

The script is licensed under the MIT license and provided as-is.

## Changelog

### 1.1.0 (master)
* add error handling for missing filename argument

### 1.0.0

Initial version
